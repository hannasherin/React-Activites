import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='main'>
    <div className='main-dash'>
      <h1>Dashboard</h1>
      <ul>
        <li> <Link to="profile" style={{textDecoration:"none",color:"white"}}>Profile</Link> </li>
        <li> <Link to="report" style={{textDecoration:"none",color:"white"}}>Report</Link>  </li>
        <li> <Link to="settings" style={{textDecoration:"none",color:"white"}}>Settings</Link> </li>
      </ul>
    </div>
    <Outlet/>
    </div>
  )
}

export default Dashboard
