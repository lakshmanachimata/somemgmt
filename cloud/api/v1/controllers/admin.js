var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/login', function (req, res) {
    res.send('login API')
})
// define the about route
router.post('/login', function (req, res) {
    res.send('register API')
})

router.get('/options', function (req, res) {
    res.send('options get API')
})

router.post('/options', function (req, res) {
    res.send('options post API')
})

router.get('/options/:details', function (req, res) {
    if (req.params.details == undefined) {
        res.send('option  details get API NO DETAIL')
    } else {
        res.send('option  details get API  ' + req.params.details)
    }
})

router.post('/options/:details', function (req, res) {
    res.send('option details post API')
})

router.get('/options/:details/:tasks', function (req, res) {
    res.send('option  details get API ' + req.params.details + '  ' + req.params.tasks)
})

router.post('/options/:details/:tasks', function (req, res) {
    res.send('option details tasks post API')
})

router.put('/options/:details/:tasks', function (req, res) {
    res.send('option details tasks put API')
})

router.delete('options/:details/:tasks', function (req, res) {
    res.send('option details tasks delete API')
})

module.exports = router