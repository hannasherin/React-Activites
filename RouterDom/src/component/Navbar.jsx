import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <ul>
         <li><Link>About</Link></li>
         <li><Link>Contact</Link> </li>
         <li><Link>Service</Link> </li>
         <li><Link>User</Link> </li>
      </ul>

    </div>
  )
}

export default Navbar
