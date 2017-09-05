var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// creating express app
var app = express();

// MIDDLEWARE
// logger
var logger = function(req,res, next) {
console.log('logging...');
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use (express.static(path.join(__dirname, 'public')));
app.use(logger);

app.get('/',function(req,res) {
  res.send('working');
});
app.listen(3000, function() {
  console.log('server is working');
});
