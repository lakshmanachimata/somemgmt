var express = require('express')
var router = express.Router()
var database = require('../../../models/database')
var configuration = require('../../../config/config')
const uuidv4 = require('uuid/v4');
var aDB;
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
    aDB = aDB.db(configuration.dbNameTwo)
    database.getCollectionsNames(aDB,getCallBack)
    function getCallBack(doc) {
        res.send(doc)
    }
})

// router.post('/options', function (req, res) {
//     database.upsertSingleDocument(configuration.collection_options, req.body, true,configuration.options_id, postData)
//     function postData(doc) {
//         res.send(doc)
//     }
// })


router.get('/options/:details/:pid', function (req, res) {
        aDB = aDB.db(configuration.dbNameTwo)
      if(req.params.pid == undefined){
        res.statusCode = 422;
        res.send("Invalid " + req.params.details + " Id")
      }else{
          database.getDocumentById(aDB,req.params.details,req.params.pid,getDetails)  
          function getDetails(r){
            if(r == undefined || r == null ){
                res.send("Invalid " + req.params.details + " Id : " + req.params.pid)
            }else{
                delete r._id
                res.send(r);
            }
          }
      }
})

router.post('/options/:details', function (req, res) {
        aDB = aDB.db(configuration.dbNameTwo)
        var inProject = req.body;
        if(req.params.pid == undefined || req.params.pid == null){
            inProject.pid = uuidv4();
            database.insertSingleDocument(aDB,req.params.details,inProject,postDetails)
            function postDetails(doc) {
                // console.log("inserted data " + JSON.stringify(inProject));
                delete inProject._id
                res.send(inProject)
            }
        }else{
            inProject.pid = req.params.pid;
            database.upsertSingleDocument(aDB,req.params.details, inProject, true,req.params.pid, postDetails)
            function postDetails(doc) {
                // console.log("inserted data " + JSON.stringify(inProject));
                res.send(inProject)
            }
        }
        // console.log("data came " + JSON.stringify(inProject))
})

router.put('/options/:details/:pid', function (req, res) {
        aDB = aDB.db(configuration.dbNameTwo)
        var inProject = req.body;
        if(req.params.pid == undefined || req.params.pid == null){
            inProject.pid = uuidv4();
            database.insertSingleDocument(aDB,req.params.details,inProject,postDetails)
            function postDetails(doc) {
                delete inProject._id
                res.send(inProject)
            }
        }else{
            inProject.pid = req.params.pid;
            database.upsertSingleDocument(aDB,req.params.details, inProject, true,req.params.pid, postDetails)
            function postDetails(doc) {
                res.send(inProject)
            }
        }
})

function setActiveDB(db){
    aDB = db;
}

// router.get('/options/:details/:tasks', function (req, res) {
//     if (req.params.details == configuration.collection_projects) {
//         res.send('option  details get API ' + req.params.details + '  ' + req.params.tasks)
//     }if(req.params.details == configuration.collection_events) {
//         res.send('option  details get API ' + req.params.details + '  ' + req.params.tasks)
//     }else{
//         res.send('Invalid option')
//     }
// })



// router.post('/options/:details/:tasks', function (req, res) {
//     if(req.params.details == configuration.collection_projects) {
//     }if(req.params.details == configuration.collection_events) {
//     }else {
//         res.send('Invalid option')
//     }
// })

// router.put('/options/:details/:tasks', function (req, res) {
//     if (req.params.details == configuration.collection_projects) {
//     } if (req.params.details == configuration.collection_events) {
//     } else {
//         res.send('Invalid option')
//     }
// })
module.exports = router;
module.exports.setActiveDB = setActiveDB;