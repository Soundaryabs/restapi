//db schema

const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

//schema structure

let Product = new Schema(
    {
    // _id: { type:new mongoose.Types.ObjectId().toHexString()},
    // _id:{type:String},
    title:{ type:String , required:true ,minlength:3 },
    image:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    description:{type:String, required:true },
    created:{ type:Date,default:Date.now}
    },
    {
    collection:'products'
    }
);

module.exports = mongoose.model('Product',Product);