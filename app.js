// const http= require('http');

const express= require('express');

const bodyParcer = require('body-parser');

const adminRoutes= require('./routes/admin');

const shopRoutes = require('./routes/shop');


const app = express();



app.use(bodyParcer.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// to add 404 page
app.use((req,res,next)=>{
res.status(404).send('<h1>Page Not Found!!!</h1>')
});
// app.use('/user',(req,res,next)=>{
//    res.send('Hello from user routes');
   
// });

// app.use('/add-product',(req,res,next)=>{
//     console.log('in the next  middleware');
//     res.send('<form  action="/product" method="POST"><input type="text" name="title"> <button type="submit">Submit</button></form>');
// });

// app.post('/product',(req,res,next)=>{
//    console.log(req.body);
//    res.redirect('/'); 
// });




app.use('/',(req,res,next)=>{
    console.log('in the next  middleware');
    res.send('<h1>Hello from ExpressJS</h1>');
});
// app.use('/',(req,res,next)=>{
//     console.log('in the middleware');
//     res.send('Hello from default.');
    
// });


app.listen(4000);
// const server= http.createServer(app);

// server.listen(4000);