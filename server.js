var express     = require("express");
var mongoose    = require("mongoose");
var bodyParser  = require("body-parser");
var items       = require("./app/server/itemsModel");
var postmark = require("postmark");

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

    var senderDetail = {
        "email":req.body.email,
        "name" : req.body.name,
        "message": req.body.message
    };

    var client = new postmark.Client(process.env.POSTMARK_API_KEY);
    client.sendEmail({
        "From":process.env.EMAIL,
        "To":senderDetail.email,
        "Bcc": process.env.EMAIL,
        "Subject" : "ExcelTech Support",
        "TextBody" : "Hello, " + senderDetail.name + ". Thank you for contacting ExcelTech Store. Please allow 48 hours to hear from representative to reply your message." +
        " Your concern is very important to us. Your message is : " + senderDetail.message
    },function(err,mail){
        if(err){
            console.log(err);
            res.status(404).send({success:false, message: "Oops!!! Something went wrong please try again", returnObj:err});
        }else{
            console.log(mail , senderDetail);
            res.status(200).send({success:true, message: "your message has been sent", returnObj:senderDetail});
        }
    });
});
app.listen(PORT, function(req, res){
   console.log("Go to URL :- localhost:" + PORT);
});