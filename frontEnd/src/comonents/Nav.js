import React from 'react'
import { Link } from 'react-router-dom'
const Nav=()=>{
    const auth=localStorage.getItem('user')
    return(
        <>
        {/* <h1>NavBar</h1> */}
        <ul className='nav-bar'>
            <li><Link  className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/add">Add Product</Link></li>
            <li><Link  className='nav-link'to="/update">Update Product</Link></li>
            <li>{auth?<Link  className='nav-link'to="/logout">Logout</Link>:<Link  className='nav-link'to="/signup">SignUp</Link>}</li>
            <li></li>
            <li><Link  className='nav-link'to="/profile">Profile</Link></li>
        </ul>
        </>
    )
}
export default Nav