const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var mongoDbClient;
var db

function connectDB(url,dbName){
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        mongoDbClient =  client;
        db = mongoDbClient.db(dbName);
    });
}

function upsertSingleDocument(collectionName,doc , isUpsert){
    db.collection(collectionName).updateOne(
        { "_id": "00001"},
        { $set: doc},
        { upsert: isUpsert },
        function (err, r) {
            assert.equal(null, err);
    });
}

function getDocumentById(collectionName,inId,callback){
    console.log("document id " + inId)
    db.collection(collectionName).find(
        { "_id": inId }).next(function (err, r) {
            assert.equal(null, err);
            callback(r)
        });
}

function closeDb(name){
    var db = mongoDbClient.db(name);
    db.close();
}

module.exports.getDocumentById = getDocumentById;
module.exports.upsertSingleDocument = upsertSingleDocument;
module.exports.connectDB = connectDB;
