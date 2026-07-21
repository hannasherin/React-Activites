import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <ul>
            <li><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link></li>
             <li><Link to="/product" style={{textDecoration:"none",color:"white"}}>Product</Link></li>
              {/* <li><Link to="/" >ProductDetails</Link></li>   */}
        </ul>
        
        </>
    )
}
export default Navbar