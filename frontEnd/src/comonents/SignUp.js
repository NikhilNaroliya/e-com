import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 const SignUp=()=>{
    let [name,setName]=useState("");
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
        console.log(email,password,name)
        console.log('function called')
        
        let result=await fetch('http://localhost:4500/signup',{
            method:'post',
            mode:'cors',
            body:JSON.stringify({name,email,password}),
            
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
            <h4 id="h4-register">Regiter</h4>
            <input value={name} onChange={(e)=>setName(e.target.value)}    className="inputBox" type="text" placeholder="enter name" />

            <input className="inputBox"  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email" />

            <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className="inputBox" type="password" placeholder="enter password " />
            <button onClick={()=>collectData()} id="signup-btn" >Sign Up</button>
        </div>
    )

 }
 export default SignUp

