// using cors to fix backend issue cors
const express=require('express')
require('./db/config')
const Product=require('./db/Product')
const User=require('./db/User')
const Jwt=require('jsonwebtoken')
const JwtKey='e-com1'
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
    Jwt.sign({result}, JwtKey, {expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send("Something went wrong")  
        }
        resp.send({result,auth:token})
    })

})

// login api 

app.post('/login',async(req,resp)=>{
   if(req.body.password && req.body.email)
   {
    let user= await User.findOne(req.body).select('-password')
    if (user) {
        Jwt.sign({user}, JwtKey, {expiresIn:"2h"},(err,token)=>{
            if(err){
                resp.send("Something went wrong")  
            }
            resp.send({user,auth:token})
        })
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

app.get('/products' ,async (req,resp)=>{
    let product = await Product.find()
    if(product.length>0)
    {
        resp.send(product)
    }
    else
    {
        resp.send({result : "No products found "})
    }
})
app.delete("/product/:id", async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result)
}),

    app.get("/product/:id", async (req, resp) => {
        let result = await Product.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        } else {
            resp.send({ "result": "No Record Found." })
        }
    })

app.put("/product/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

app.put("/product/:id", verifyToken,async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

app.get("/search/:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    resp.send(result);
})
function verifyToken(req,resp,next){
    let token=req.headers['authorization']
     
    if(token)
    {
        token.split(' ')[1];
        Jwt.verify(token,JwtKey,(err,valid)=>{
            if(err)
            {
                resp.status(401).send({result:'please provide valid token'})
            }
            else
            {
                next();
            }
        })

    }
    else{
        resp.status(403).send({result:'Please add token with header'})
    }
}
app.listen(4500)