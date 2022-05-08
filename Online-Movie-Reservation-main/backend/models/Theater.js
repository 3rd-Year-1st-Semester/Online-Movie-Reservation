const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theaterSchema = new Schema({

    name : {
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Theater = mongoose.model("Theater,theaterSchema");

module.exports=Theater;