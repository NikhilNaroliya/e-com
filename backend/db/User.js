const mongoose =require('mongoose')
const productSchmemas=new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

module.exports= mongoose.model('users',productSchmemas)