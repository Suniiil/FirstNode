const express= require('express');

// const path = require('path');
const productController = require('../controllers/products');
// const adminData= require('./admin');

// const rootDir = require('../util/path');

const router= express.Router();

router.get('/',productController.getProducts);

module.exports=router;