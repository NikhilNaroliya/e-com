import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 const Login=()=>{

    let [email,setEmail]=useState("");
    let[password,setPassword]=useState("")

    const navigate=useNavigate()

    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth)
        {
            navigate('/')
        }
    })



    const collectData= async()=>{
        console.log(email,password)
        console.log('function called')
        
        let result=await fetch('http://localhost:4500/signup',{
            method:'post',
            mode:'cors',
            body:JSON.stringify({email,password}),
            
            headers:{
                'Content-Type':'application/json'
            },

        });
        
        result=await result.json()
        console.log('result is'+{...result}) 

         localStorage.setItem('user',JSON.stringify(result))

        if(result)
        {
            navigate('/')
        }
    }
    // collectData()

    return(
        <div className="register">
            <h4 id="h4-register">Login</h4>
          

            <input className="inputBox"  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email" />

            <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className="inputBox" type="password" placeholder="enter password " />
            <button onClick={()=>collectData()} id="signup-btn" >Sign Up</button>
        </div>
    )

 }
 export default Login

