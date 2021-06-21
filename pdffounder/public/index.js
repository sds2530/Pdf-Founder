const path=require('path');
const express=require('express');
const app=express();
const port=5000;

app.use(express.static('public'));

app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.get("/index",function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
    
});
app.get("/register",function(req,res) {
    res.sendFile(path.join(__dirname+'/register.html'));
});


app.listen(port,function() {
    console.log("Server started for port:%d",port)
});
