const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String,
        default:"0"
    }
})
const Item = mongoose.model('Item',itemSchema)
module.exports= Item