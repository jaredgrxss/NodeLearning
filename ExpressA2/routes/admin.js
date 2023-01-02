const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');


// all of these request are being filtered through "/admin"

// admin/add-product -> GET
router.get('/add-product',adminController.getAddProductsPage);


// admin/add-product -> POST
router.post('/add-product',adminController.postProduct);


// admin/products
router.get('/products',adminController.getProducts);


//editing a product
router.get('/edit-product/:productId',adminController.getEditProduct);


//posting a product 
router.get('/edit-product',)

//export
exports.routes = router;
