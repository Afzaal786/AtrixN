
var express = require('express');
var port = 4000;
var app = express();

app.use(express.static(__dirname + '/www'))

// decllaring application

app.listen(port)
console.log('working on' + port);

