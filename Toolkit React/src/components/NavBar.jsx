import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li> <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></li>
        <li><Link to="/users"  style={{textDecoration:'none',color:'white'}}>Userslist</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
