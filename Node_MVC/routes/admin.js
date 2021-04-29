const express= require('express');

const path = require('path');
const bodyParcer = require('body-parser');

const rootDir= require('../util/path');
const productController = require('../controllers/products');
const router =express.Router();

const products=[];


router.get('/add-product',productController.getAllProucts);

router.post('/add-product',productController.postAllProducts);

// exports.routes= router;
// exports.products=products;

module.exports=router;
