import { METHODS } from 'http'
import React, { useState } from 'react'

const AddProduct =()=>{

   const [name,setName]=useState('')
   const [price,setPrice]=useState('')
   const [category,setCategory]=useState('')
   const [company,setCompany]=useState('')
   const [showAdd,setAddMsg]=useState('')
    const [err,setErr]=useState(false)
   const collectData= async()=>{

         if(!name || !price || !category || !company){
            setErr(true);
            setAddMsg('Add all fields')
            return false;
         }
         else
         {
            setAddMsg('Product Added')
            setErr(false)
         }

       const userId=JSON.parse(localStorage.getItem('user'))._id

       let result= await fetch('http://localhost:4500/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-Type':'application/json'
        }

       })

       result=await result.json()
        console.log(result)
      
   }

    return(
        <div className="register">
        <h4 id="h4-register">Add Product</h4>
      

        <input  onChange={(e)=>setName(e.target.value)} value={name} className="inputBox"   type="text" placeholder="enter product name" />
        {  err && !name && <span className='invalid-input'>Enter valid name</span>}

        <input    
        value={price} onChange={(e)=>setPrice(e.target.value)}
        className="inputBox" type="number" placeholder="enter product price " />
          {  err && !price && <span className='invalid-input'>Enter right price</span>}

       <input     onChange={(e)=>setCategory(e.target.value)} value={category}
        className="inputBox" type="text" placeholder="enter product category" />
        {  err && !name && <span className='invalid-input'>Enter valid catgry</span>}

         <input    value={company} onChange={(e)=>setCompany(e.target.value)}
        className="inputBox" type="text" placeholder="enter product company " />
         {  err && !name && <span className='invalid-input'>Enter valid com..</span>}
        <button onClick={()=>collectData()} id="signup-btn" >Add Product</button>
        <p style={{"color":err?'red':'green'}}>{showAdd}</p>
    </div>
    )
}

export default AddProduct