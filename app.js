var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.send("Hello From Our Web App!");
});

app.listen(10000, function(){
    console.log('App listening on port 8080!');
});