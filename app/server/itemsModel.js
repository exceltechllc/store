var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
    sku: {
        type    : Number,
        unique  : true,
        require : true
    },
    name: {
        type    : String,
        require : true
    },
    modelNumber: {
        type    : String,
        require : true
    },
    description: String,
    price: {
        type    : Number,
        require : true
    },
    size: {
        type    : Number,
        default : 1
    },
    addedOn: {
        type    : Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Item", itemsSchema);