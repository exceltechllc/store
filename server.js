var express = require("express");
var sendgrid = require("sendgrid");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 1227;


app.get("/", function(req, res){
   res.sendfile(__dirname + '/index.html');
});

app.use("/bower_components", express.static(__dirname + "/app/bower_components"));
app.use("/client", express.static(__dirname + "/app/client"));
app.use("/server", express.static(__dirname + "/app/server"));

app.listen(PORT, function(req, res){
   console.log("Go to URL :- localhost:" + PORT);
});