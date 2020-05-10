const getDb = require('../util/database').getDb;
const ObjectID = require('mongodb').ObjectID;
class Product {
    constructor(title, price, imageUrl, description, id, userId) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this._id = id ? ObjectID(id) : null;
        this.userId = userId;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db
                .collection('products')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            dbOp = db.collection('products').insertOne(this);
        }

        return dbOp
            .then((result) => console.log(result))
            .catch((err) => console.error(err));
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('products')
            .find()
            .toArray()
            .then((products) => {
                console.log('Product fetchAll: ', products);
                return products;
            })
            .catch((err) => console.error('Product fetchAll error: ', err));
    }

    static fetchById(prodId) {
        const db = getDb();
        return db
            .collection('products')
            .find({ _id: ObjectID(prodId) })
            .next()
            .then((product) => {
                console.log('Product fetchById: ', product);
                return product;
            })
            .catch((err) => console.error('Product fetchById error: ', err));
    }

    static deleteById(prodId) {
        const db = getDb();
        return db
            .collection('products')
            .deleteOne({ _id: ObjectID(prodId) })
            .then((product) => {
                console.log('Product fetchById: ', product);
                return product;
            })
            .catch((err) => console.error('Product fetchById error: ', err));
    }
}

module.exports = Product;
