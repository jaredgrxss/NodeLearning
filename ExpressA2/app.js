//express + parser + path finder for files
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//templating engine
app.set('view engine','ejs');
app.set('views','./views');

//routes
const adminData = require('./routes/admin');
const shopData = require('./routes/shop');


//parser to parse all request on our server
app.use(bodyParser.urlencoded({extended:false}));

//funnel all request to fetch static files from this directory
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminData.routes);
app.use(shopData.routes);

//404 page if no routes get hit, this is what will be returned
app.use('/',(req,res,next)=>{
    context = {
        PageTitle: 'Error',
        path:'None',
    }
    res.status(404).render('404',context);
})


app.listen(8000);