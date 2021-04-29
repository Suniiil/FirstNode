const express= require('express');
 const path = require('path');
const app = express();
const bodyParcer = require('body-parser');

const myErrorController = require('./controllers/error');
//const rootDir= require('.//util/path');
const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParcer.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shopRoutes);

app.use(myErrorController.get404Error);


app.listen('8000');
