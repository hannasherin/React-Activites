import React from 'react'
import Child from './Child'

const Parent = () => {
    let name="Hanna Sherin"
  return (
    <div>
      <h1>Parent Component</h1>
      <Child username={name}/>
    </div>
  )
}

export default Parent
