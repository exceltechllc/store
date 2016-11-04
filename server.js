var express     = require("express");
var sendgrid    = require("sendgrid");
var mongoose    = require("mongoose");
var bodyParser  = require("body-parser");
var items       = require("./app/server/itemsModel");
var nodemailer  = require("nodemailer");
var trasporter  = nodemailer.createTransport();

var app = express();
var PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI, function(err){
    mongoose.Promise = global.Promise;
    if(err){
        console.log("error: " + err);
    }else{
        console.log("you are connected to DB");
    }
});

app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/client", express.static(__dirname + "/app/client"));
app.use("/server", express.static(__dirname + "/app/server"));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/getAllItems", function(req, res){
    items.find({}, function (err, items) {
        if (err){
            console.log(err);
            res.status(404).send({success:false, message: err.message, returnObj:""});
        }else {
            res.status(200).send({success:true, returnObj:items});
        }
    })
});
app.post("/addItem", function (req, res) {
    var item = new items(req.body);
    item.save(function (err, item){
        if (err){
            if (err.name === 'MongoError' && err.code === 11000) {
                err.message = 'There was a duplicate key';
            }
            console.log(err);
            res.status(409).send({success:false, message: err.message, returnObj:""});
        }else {
            res.send(item);
        }
    })
});
app.post("/contactUs", function (req, res){

    trasporter.sendMail({
        from    : req.body.email,
        to      : "parsippany911@yahoo.com",
        subject : "Question from " + req.body.name,
        text    : req.body.message
    },function (err, mail){
        if(err){
            console.log(err);
        }else {
            console.log("SENT");
            console.log(mail);
            res.status(200).send({success:true, message: "your message has been sent", returnObj:req.body});
        }

    });


});
app.listen(PORT, function(req, res){
   console.log("Go to URL :- localhost:" + PORT);
});