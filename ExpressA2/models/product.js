const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..','data','products.json');
const Cart = require('./cart');

const getProductsFromFile = callback => {
        fs.readFile(p, (err, fileContent) =>{
            if(err){
                callback([]);
            }else{
                callback(JSON.parse(fileContent));
            }
        
    });
};

module.exports = class Product {
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save(){
        getProductsFromFile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(product => {
                    return product.id === this.id;
                });
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), (err)=>{
                    console.log(err);
                });
            }else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    console.log(err);
                });
            }
        })
    }


    static deleteById(id){
        getProductsFromFile(products => {
            console.log(products);
            const product = products.find(prod => {
                return prod.id === id;
            });

            const updatedProducts = products.filter( prod => {
                return prod.id !== id;
            });
            fs.writeFile(p, JSON.stringify(updatedProducts), err =>{
                if(!err){
                    Cart.deleteProduct(id, product.price);

                }else{
                    console.log(err);
                }
            });
        });
    }


    static fetchAll(callback){
        getProductsFromFile(callback);
    }


    static findById(id, callback){
        getProductsFromFile(products => {
            const product = products.find(p => {
                return p.id === id;
            });
            callback(product);
        });
    }
}