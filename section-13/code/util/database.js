const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://ram:uXJZjtcTxmMHFFgA@cluster0-0ql5k.mongodb.net/test?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log('Connected!');
            // _db = client.db('test');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'No database found!!';
};

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
