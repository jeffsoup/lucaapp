//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');

//Express
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
bson = require('bson');

//Templating Engine
app.set('view engine', 'jade');
//Server Start
app.set('port', (process.env.PORT || 2015));

app.get("/luca.html", function(req, res){
  res.send('scary spider <br> <img width=\"90%\" src=\"http://photos.beilby.com/images/20120306152639_wolf.spider.2.jpg\" />');
});

app.get("/", function(req, res){
  res.send('daddy is weird');
});

app.get("/m", function(req, res){
  var reply;
  reply += 'yo man yeah how are yo doing pretty good man pretty good. <span style=\"color: green;\" \"font-weight:bold\">'; 
  reply += 'do not talk to me like that for i am skeleton man';
  reply += '<table><tr><td width=\"50%"><img src=\"http://www.maskeradefancydress.co.uk/ekmps/shops/flagshipenterp/images/groovy-hippy-guy-4643-p.jpg\" \>';
 reply += '</td><td><img src=\"http://fc08.deviantart.net/fs11/i/2006/185/a/4/Jack_Skellington_by_kev2137.jpg\" \></td></tr></table>';

  
  res.send(reply);
});

 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
