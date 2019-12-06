const ProductModel = require('../models/productModel');

exports.getIndex = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
}

exports.getProducts = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

exports.getCart = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/cart', {
            prods: products,
            pageTitle: 'Your Cart',
            path: '/cart',
        });
    });
}

exports.getOrders = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/orders', {
            prods: products,
            pageTitle: 'Your Orders',
            path: '/orders',
        });
    });
}

exports.getCheckout = (req, res, next) => {
    ProductModel.fetchAll(products => {
        res.render('shop/checkout', {
            prods: products,
            pageTitle: 'Checkout',
            path: '/checkout',
        });
    });
}