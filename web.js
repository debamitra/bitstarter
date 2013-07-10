var fs = require('fs');
fs.readFileSync('bitstarter/index.html', function (err, data) {
  if (err) throw err;
  data.toString();
});
var express = require('express');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {
  response.send("howdy");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
