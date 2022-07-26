const mongoose= require('mongoose');


const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    description:String,
    tag:String,
    stock:Number,
    userId:String,
    

});
module.exports=mongoose.model("products",productSchema)