import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const user=useSelector((state)=>state.userInfo.users)
  return (
    <div>
      <ul>
        <li> <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></li>
        <li><Link to="/users"  style={{textDecoration:'none',color:'white'}}>Userslist</Link></li>
        <button>Count {user.length}</button>
      </ul>
    </div>
  )
}

export default NavBar
