const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');


router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.post('/cart-delete-item',shopController.postCartDeleteProdct);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);





//export all the routes
exports.routes=router;