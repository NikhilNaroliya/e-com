const express=require('express')
require('./db/config')
const User=require('./db/User')
const app=express();

app.use(express.json())

app.post('/signup',(req,resp)=>{
    resp.send(req.body)
})

app.listen(4500)