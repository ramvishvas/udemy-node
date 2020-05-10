const getDb = require('../util/database').getDb;
const ObjectID = require('mongodb').ObjectID;

class User {
    constructor(name, email, cart, id) {
        this.name = name;
        this.email = email;
        this.cart = cart;
        this._id = id;
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    addToCart(product) {
        // const cartProduct = this.cart.items.findIndex((cp) => {
        //     return cp._id === product._id;
        // });

        const updatedCart = {
            items: [
                {
                    ...product,
                    quantity: 1,
                },
            ],
        };
        const db = getDb();
        return db.collection('users').updateOne(
            {
                _id: ObjectID(this._id),
            },
            {
                $set: { cart: updatedCart },
            }
        );
    }

    static fetchById(userId) {
        const db = getDb();
        return db.collection('users').findOne({ _id: ObjectID(userId) });
    }
}

module.exports = User;
