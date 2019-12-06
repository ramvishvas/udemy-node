const path = require('path');
const fs = require('fs');

const rooDir = require('../util/path');

const p = path.join(rooDir, 'data', 'productsData.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(data));
    });
};

module.exports = class Product {
    constructor(title, imgUrl, description, price) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
        this.price = price;
    };

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.error(err);
                }
            })
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}