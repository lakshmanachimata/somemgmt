var express = require('express')
var router = express.Router()
var database = require('../../../models/database')
var configuration = require('../../../config/config')
const uuidv4 = require('uuid/v4');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Request came at ' + 'Time: ', Date.now())
    next()
})
// define the home page route
router.get('/login', function (req, res) {
    res.send('login V1 API')
})
// define the about route
router.post('/login', function (req, res) {
    res.send('register API')
})

router.get('/options', function (req, res) {
    database.getDocumentById(configuration.collection_options, configuration.options_id, getCallBack)
    function getCallBack(doc) {
        res.send(doc)
    }
})

router.post('/options', function (req, res) {
    res.send('options post API')
})


router.get('/options/:details', function (req, res) {
    if(req.params.details == configuration.collection_projects){

    }if(req.params.details == configuration.collection_events){
    }else{
        res.send('Invalid option')
    }
})

router.post('/options/:details', function (req, res) {
    // console.log(req.params.details)
    // console.log(configuration.collection_projects)
    // console.log(typeof req.params.details);
    // console.log(typeof configuration.collection_projects);

    if(req.params.details == configuration.collection_projects) {
        // console.log(req)
        var inProject = req.body;
        inProject._id = uuidv4();
        console.log(typeof req.body)
        res.send(inProject)
    }else if(req.params.details == configuration.collection_events) {
    }else{
        res.send('Invalid option')
    }
})

router.get('/options/:details/:tasks', function (req, res) {
    if (req.params.details == configuration.collection_projects) {
        res.send('option  details get API ' + req.params.details + '  ' + req.params.tasks)
    }if(req.params.details == configuration.collection_events) {
        res.send('option  details get API ' + req.params.details + '  ' + req.params.tasks)
    }else{
        res.send('Invalid option')
    }
})



router.post('/options/:details/:tasks', function (req, res) {
    if(req.params.details == configuration.collection_projects) {
    }if(req.params.details == configuration.collection_events) {
    }else {
        res.send('Invalid option')
    }
})

router.put('/options/:details/:tasks', function (req, res) {
    if (req.params.details == configuration.collection_projects) {
    } if (req.params.details == configuration.collection_events) {
    } else {
        res.send('Invalid option')
    }
})
module.exports = router