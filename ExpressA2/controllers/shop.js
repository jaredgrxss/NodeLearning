const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        context = {
            path: '/products',
            prods: products,
            docTitle: "Jared's Shop",
            pageTitle: 'All Products'
        }
        res.render('shop/product-list',context);
    });
};


exports.getProduct = (req,res,next) =>{
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        context = {
            path: '/products',
            prod: product,
            pageTitle: 'This Product',
        }
    
        res.render('shop/product-detail',context);
    })
    
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products =>{
        context = {
            path: '/',
            prods: products,
            docTitle: "Jared's Shop",
            pageTitle: "Our Shop",
        }
        res.render('shop/index',context);
    });
};


exports.getCart = (req,res,next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products =>{
            const cartProducts = [];
            for(product of products){
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                
                if(cartProductData){
                    cartProducts.push({productData:product, quantity: cartProductData.qty});
                }
            }
            context = {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts,
            };
            res.render('shop/cart',context);
        });
    });
};

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
        context = {
            path: '/cart',
            pageTitle: 'Your Cart',
    
        };
        res.redirect('/cart');

    });
}

exports.getOrders = (req,res,next) => {
    context = {
        path: '/orders',
        pageTitle: 'Your Orders',
    }
    res.render('shop/orders',context);
};

exports.getCheckout = (req,res,next) => {
    context = {
        path: '/checkout',
        pageTitle: 'Checkout',
    }

    res.render('shop/checkout',context);
};



