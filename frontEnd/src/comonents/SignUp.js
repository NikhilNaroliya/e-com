import React, { useState } from "react";

 const SignUp=()=>{
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let[password,setPassword]=useState("")

    const collectData=()=>{
        console.log(email,password,name)
    }
    collectData()

    return(
        <div className="register">
            <h4 id="h4-register">Regiter</h4>
            <input value={name} onChange={(e)=>setName(e.target.value)}    className="inputBox" type="text" placeholder="enter name" />

            <input className="inputBox"  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email" />

            <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className="inputBox" type="password" placeholder="enter password " />
            <button onClick={collectData} id="signup-btn" >Sign Up</button>
        </div>
    )

 }
 export default SignUp

