const express=require('express');

const app=express();

const PORT=80;
const HOST='0.0.0.0';

app.get('/staj',function(req,res) {
    res.send("Hello World from Node.JS!");
})

app.listen(PORT,HOST);