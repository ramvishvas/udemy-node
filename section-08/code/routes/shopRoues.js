const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shopController');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/Orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;