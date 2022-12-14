const http = require('http');
const express = require('express');

const app = express();


app.use('/add-product',(req,res,next)=>{
    res.send("<h1>This is a test!</h1>");
})




app.listen(3000);
