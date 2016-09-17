var express = require("express");


var app = express();
var PORT = 1227;
app.get("/", function(req, res){
   res.sendfile(__dirname + '/index.html');
});
app.listen(PORT, function(req, res){
   console.log("Go to URL :- localhost:" + PORT);
});