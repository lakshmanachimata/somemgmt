
// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var usersv1 = require('./api/v1/controllers/users')
var adminv1 = require('./api/v1/controllers/admin')
var connect = require('connect');
var serveStatic = require('serve-static');
var usersv2 = require('./api/v2/controllers/users')
var adminv2 = require('./api/v2/controllers/admin')
var path = require('path');
var configuration = require('./config/config')
var database = require('./models/database')


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5857;        // set our port

var distName = "webapp/dist/webapp"
// connect().use(serveStatic(__dirname)).listen(5857, function(){
//     console.log('Server running on 8080...');
// });

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();
var options = {
    "pid":"00001",
    "prmgt_id" : "options",
    "options":
    [
        "projects",
        "events",
        "demo"
    ]
}
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function (req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);
app.use('/api/v1/users', usersv1);
app.use('/api/v1/admin', adminv2);
app.use('/api/v2/users', usersv2);
app.use('/api/v2/admin', adminv2);
app.use(express.static(path.join(__dirname,distName))); 
database.connectDB(configuration.dbUrl, configuration.dbName)

setTimeout(function () {
    database.upsertFirstOptions(configuration.collection_options, options,true)
}, 1000);

// setTimeout(function () {
//     database.getDocumentById(configuration.collection_options, "00001", getCallBack)
//     function getCallBack(doc) {
//         console.log(doc)
//     }
// }, 2000);


// START THE SERVER
// =============================================================================
app.listen(port);
