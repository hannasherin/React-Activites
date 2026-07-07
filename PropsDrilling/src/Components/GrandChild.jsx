import React from 'react'
import GgChild from './GgChild'

const GrandChild = ({value}) => {
  return (
    <div>
      <h1>Grand Child Component</h1>
      <h2>Iam {value}</h2>
      <GgChild username={value}/>
    </div>
  )
}

export default GrandChild
