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


function upsertFirstOptions(collectionName,doc , isUpsert){
    db.collection(collectionName).updateOne(
        { "_id": "00001"},
        { $set: doc},
        { upsert: isUpsert },
        function (err, r) {
            assert.equal(null, err);
    });
}


function deleteSingleDocument(collectionName,inId ,callback){
    db.collection(collectionName).findOneAndDelete( 
        { _id : inId} ,
        function (err, r) {
            assert.equal(null, err);
            callback(r);
    });
}


function insertSingleDocument(collectionName,doc ,callback){
    db.collection(collectionName).insertOne( doc ,
        function (err, r) {
            assert.equal(null, err);
            callback(r);
    });
}

function upsertSingleDocument(collectionName,doc , isUpsert,inId,callback){
    db.collection(collectionName).updateOne(
        { "_id": inId},
        { $set: doc},
        { upsert: isUpsert },
        function (err, r) {
            assert.equal(null, err);
            callback(r);
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
module.exports.upsertFirstOptions = upsertFirstOptions;
module.exports.connectDB = connectDB;
module.exports.insertSingleDocument = insertSingleDocument;
module.exports.deleteSingleDocument = deleteSingleDocument;

