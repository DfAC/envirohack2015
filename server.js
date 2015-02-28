var express = require('express');
var http = require('http');

var app = express();

var server = http.createServer(app);

app.listen(8080);