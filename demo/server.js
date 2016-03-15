var express = require('express');
var mongoose = require('mongoose');

var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var generateApis= require('APITemplate');
var route = require('./route.js');

var app= express();



mongoose.connect('mongodb://localhost/speakers', function(err) {  
    
        if(!err) 
            console.log('BD Connect');    
});

app.use(express.static(__dirname + '/app')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());

generateApis(app);
route(app);

app.listen(3000);