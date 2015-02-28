var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;


app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});