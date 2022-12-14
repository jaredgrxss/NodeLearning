const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');


//static files
app.use(express.static(path.join(__dirname,'public')));

//parser
app.use(bodyparser.urlencoded({extended:false}));


app.use(userRoutes);
app.use(homeRoutes);



app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(8000);