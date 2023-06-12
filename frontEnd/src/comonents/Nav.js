import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
     {auth?
      <ul className="nav-bar">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/add-product">
            Add Product
          </Link>
        </li>
        {/* <li>
          <Link className="nav-link" to="/update">
            Update Product
          </Link>
        </li> */}
        <li></li>
        <li></li>
        <li>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
            
        <Link onClick={logout} className="nav-link" to="/login">
              Logout 
            </Link>

        </li>
   
      </ul>
          :
          <ul className="nav-bar nav-right">
          
         
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <li>
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            </>
        
        
        </ul>   }
    </>
  );
};
export default Nav;
