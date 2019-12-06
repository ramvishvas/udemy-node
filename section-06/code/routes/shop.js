const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', {
    prods: products,
    docTitle: 'Shop'
  });
});

module.exports = router;