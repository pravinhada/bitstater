var express = require('express');
var fs = require('fs');
var htmlFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    var content = buffer.toString();
    response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
