const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req,res,next)=>{
    const products = adminData.products;
    context = {
        path: '/',
        products: products,
        docTitle: "Jared's Shop",
        PageTitle: 'Main'
    }
    res.render('shop',context);
});


exports.routes=router;