//express + parser
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//parser to parse all request on our server
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

//404 page if no routes get hit, this is what will be returned
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(8000);