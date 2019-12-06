const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body.title);
  products.push({title: req.body.title})
  res.redirect('/');
});

exports.roues = router;
exports.products = products;