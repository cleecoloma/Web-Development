const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const dbName = "fruitsDB";

// Connection URI
const url = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
        client.close();
    });
});

const insertDocuments = function(db, callback) {
    const collection = db.collection("fruits");
    collection.insertMany([
        {
            name: "Banana",
            score: 10,
            review: "Best fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        }
    ], function(err, results) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}