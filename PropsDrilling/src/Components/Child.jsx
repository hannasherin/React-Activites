import React from 'react'
import GrandChild from './GrandChild'


const Child = ({username}) => {
  return (
    <div>
    <h1>Child Component</h1>
    <h2>My name is {username}</h2>
    <GrandChild value={username}/>
    </div>
  )
}

export default Child
