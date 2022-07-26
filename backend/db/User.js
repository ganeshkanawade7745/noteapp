const mongoose= require('mongoose');


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:Number,
    address:String,
    city:String,
    state:String,
    pincode:Number

});
module.exports=mongoose.model("users",userSchema)