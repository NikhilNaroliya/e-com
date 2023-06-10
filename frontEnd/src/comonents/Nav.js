import React from 'react'
import { Link } from 'react-router-dom'
const Nav=()=>{
    return(
        <>
        {/* <h1>NavBar</h1> */}
        <ul className='nav-bar'>
            <li><Link  className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/add">Add Product</Link></li>
            <li><Link  className='nav-link'to="/update">Update Product</Link></li>
            <li><Link  className='nav-link'to="/signup">SignUp</Link></li>
            <li><Link  className='nav-link'to="/logout">Logout</Link></li>
            <li><Link  className='nav-link'to="/profile">Profile</Link></li>
        </ul>
        </>
    )
}
export default Nav