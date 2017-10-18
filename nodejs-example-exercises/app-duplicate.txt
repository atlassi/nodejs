// math.js
var math = require('./miscellaneous/math');


//express module
var express = require('express');
var app = express();

app.get('/', function(request,response){
  response.send("Welcome to my Homepage!")
})

app.get('Dropbox/Werk/NYCDA/Git/nodeJS/', function(request,response){
  response.send("Menu page")
})

app.listen(3001, function(){
  console.log(math);
} )


//
// app.get('/about-us',)
//
// app.get('/contact-us',)
