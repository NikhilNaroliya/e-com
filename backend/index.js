// using cors to fix backend issue cors
const express=require('express')
require('./db/config')
const Product=require('./db/Product')
const User=require('./db/User')

const app=express();

const cors=require('cors')
app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json())

// signup api

app.post('/signup',async (req,resp)=>{
    let user=new User(req.body)
    let result=await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result)
    console.log(result)
})

// login api 

app.post('/login',async(req,resp)=>{
   if(req.body.password && req.body.email)
   {
    let user= await User.findOne(req.body).select('-password')
     if(user)
     {
        resp.send(user)
     }
     else
     {
        resp.send({result:"user not found"})
     }
   }
   else{
    resp.send({result:"enter valid fields"})
   }
})
app.post('/add-product',async(req,resp)=>{
 
     let product=new Product(req.body)
     let result=await product.save();
     resp.send(result);
     
})

app.listen(4500)