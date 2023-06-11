const mongoose =require('mongoose')
const productSchmemas=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    userId:String,
    company:String

})

module.exports= mongoose.model('products',productSchmemas)