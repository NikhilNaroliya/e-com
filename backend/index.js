// using cors to fix backend issue cors
const express=require('express')
require('./db/config')

const User=require('./db/User')

const app=express();

const cors=require('cors')
app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json())

app.post('/signup',async (req,resp)=>{
    let user=new User(req.body)
    let result=await user.save();
    resp.send(result)
    console.log(result)
})

app.listen(4500)