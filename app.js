var express = require("express");
var app=express();
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];
app.get('/home', function(req, res){
    console.log(req.params.name)
    //res.send('hello js is saying.. hello');
    res.render('home',{fortunes});
});
app.use(function(req,res){
    //res.type('text/plain');
    res.status(404);
    //res.send('404- my cusotm page');
    res.render('404');
});
app.listen(3000, function(){
    console.log("my app listing on port no 3000");
});

