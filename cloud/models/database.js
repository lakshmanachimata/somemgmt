const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function connectDB(url,dbName,callback){
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        mongoDbClient =  client;
        callback(client)
    });
}

function getCollectionsNames(db,callback){
    db.listCollections().toArray(
        function(err, collInfos) {
            assert.equal(null, err);
            var collArray = [];
            for(var i =0; i < collInfos.length; i++){
                collArray.push(collInfos[i].name);
            }
            callback(collArray);
    });
}

// function upsertFirstOptions(db,collectionName,doc , isUpsert){
//     db.collection(collectionName).updateOne(
//         { "_id": "00001"},
//         { $set: doc},
//         { upsert: isUpsert },
//         function (err, r) {
//             assert.equal(null, err);
//     });
// }

function getDocumentsForCollection(db,collectionName,callback){
    db.collection(collectionName).find({}).toArray(function(err, result) {
    if (err) throw err;
    callback(result)
  });
}


function deleteSingleDocument(db,collectionName,inId ,callback){
    db.collection(collectionName).findOneAndDelete( 
        { "pid" : inId} ,
        function (err, r) {
            assert.equal(null, err);
            callback(r);
    });
}


function insertSingleDocument(db,collectionName,doc ,callback){
    db.collection(collectionName).insertOne( doc ,
        function (err, r) {
            assert.equal(null, err);
            callback(r);
    });
}

function upsertSingleDocument(db,collectionName,doc , isUpsert,inId,callback){
    db.collection(collectionName).updateOne(
        { "pid": inId},
        { $set: doc},
        { upsert: isUpsert },
        function (err, r) {
            assert.equal(null, err);
            callback(r);
    });
}

function getDocumentById(db,collectionName,inId,callback){
    db.collection(collectionName).find(
        { "pid": inId }).next(function (err, r) {
            assert.equal(null, err);
            callback(r)
        });
}

function closeDb(db){
    db.close();
}

module.exports.getDocumentById = getDocumentById;
module.exports.upsertSingleDocument = upsertSingleDocument;
module.exports.connectDB = connectDB;
module.exports.getDocumentsForCollection = getDocumentsForCollection;
module.exports.insertSingleDocument = insertSingleDocument;
module.exports.deleteSingleDocument = deleteSingleDocument;
module.exports.getCollectionsNames =  getCollectionsNames;
