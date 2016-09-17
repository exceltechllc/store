var express = require("express");


var app = express();
var PORT = 1227;

app.listen(PORT, function(req, res){
   console.log("Go to URL :- localhost:" + PORT);
});