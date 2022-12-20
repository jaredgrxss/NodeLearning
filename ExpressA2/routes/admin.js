const path = require('path');
const express = require('express');
const router = express.Router();


const products = [];


// admin/add-product -> GET
router.get('/add-product',(req,res,next)=>{
    context={
        path: '/admin/add-product',
        PageTitle: 'Add Product',
    }
    res.render('add-product',context)
});


// admin/add-product -> POST
router.post('/add-product',(req,res,next)=>{
    products.push( {title: req.body['title'] } );
    res.redirect('/');
});


exports.routes = router;
exports.products = products;