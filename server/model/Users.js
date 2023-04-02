const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    Fullname:{ type:String,require:true},
    EmailID:{ type:String,require:true,unique:true},
    Phonenumber:{ type:String,require:true,unique:true},
    Password:{ type:String,require:true},
    City:{type:String,require:true},
    Country:{type:String,require:true},
    Status:{type:String,require:true},
});

const User = mongoose.model("user",userSchema)

exports.User = User;