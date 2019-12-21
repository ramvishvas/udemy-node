const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://ram:uXJZjtcTxmMHFFgA@cluster0-0ql5k.mongodb.net/test?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

module.exports = mongoConnect;
