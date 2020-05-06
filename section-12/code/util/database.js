const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
    MongoClient.connect(
        'mongodb+srv://ram:uXJZjtcTxmMHFFgA@cluster0-0ql5k.mongodb.net/test?retryWrites=true&w=majority'
    )
        .then((client) => {
            console.log('MongoDb Connected!!!');
            _db = client.db();
        })
        .catch((err) => {
            console.log('MongoDb Connection Error!!!');
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
