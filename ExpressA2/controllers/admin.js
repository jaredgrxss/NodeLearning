const Product = require('../models/product');

exports.getAddProductsPage = (req,res,next)=>{
    const editMode = req.query.edit;
    context={
        path: '/admin/add-product',
        pageTitle: 'Add Product',
        editing:editMode,

    }
    res.render('admin/edit-product',context);
};



exports.postProduct = (req,res,next)=>{
    const title = req.body['title'];
    const imageUrl = req.body['imageUrl'];
    const price = req.body['price'];
    const description = req.body['description'];
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if(!prodId){
            return res.redirect('/');
        }
        context={
            path: '/admin/edit-product',
            pageTitle: 'Edit Product',
            editing: editMode,
            product: product,
        }
        res.render('admin/edit-product',context);
    })
};

exports.postEditProduct = (req,res,next) => {
    
}


exports.getProducts = (req,res,next) => {
    Product.fetchAll(products =>{
        context = {
            path: '/admin/products',
            prods: products,
            docTitle: "Jared's Shop",
            pageTitle: "Our Shop",
        }
        res.render('admin/products',context);
    })
    
}