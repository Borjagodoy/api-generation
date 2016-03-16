
# API generation

# Install
 1. Download the project.
 2. Add the folder into node_modules in your project(provisional until publication in npm).
 3. import with your project requires and follow the detailed sample code below.

#The project

This project, generate the backend Full API REST depending to models describe you in the config gile API_config.json
This file is a json list of object wich contain three atributes, name of model, atributtes list of model and type list of the atributes. Each object is defined by the following code.
```json
{"name":"usuario", 
 "atributtes":["name","LastName","Country"],
 "type":["string","string","string"]
}
```
Only you need add the two news lines in your server.js 
``````js
var express = require('express');
var mongoose = require('mongoose');

var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var generateApis= require('APITemplate');
var route = require('./route.js');

var app= express();



mongoose.connect('mongodb://localhost/project', function(err) {  
    
        if(!err) 
            console.log('BD Connect');    
});

app.use(express.static(__dirname + '/app')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());

generateApis(app); //new line
route(app);       //new line

app.listen(3000);
```
The rest were longer necessary to use express.

This helps us to end the repetitive task of creating controllers for each model that we needed the apis and the module generate the all code for the API's of the models declared you in the file confing API_config.json
the rest were longer necessary to use express.


  [MIT](LICENSE)
