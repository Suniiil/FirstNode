const path = require('path');
 const Product = require('../models/product')

const rootDir= require('../util/path');
 

exports.getAllProucts = (req,res,next)=>{
    console.log('in the /add-product routes');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
        
    };
exports.postAllProducts = (req,res,next)=>{
  
    const product = new Product(req.body.title);
    product.save();
res.redirect('/');
};

exports.getProducts = (req,res,next)=>{

    const products = Product.fetchAll();
    console.log(products);
        res.sendFile(path.join(rootDir,'views','shop.html'));
    };