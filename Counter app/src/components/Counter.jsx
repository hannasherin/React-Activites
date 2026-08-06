import React, { useState } from 'react'

const Counter = ({
    count,
    increment,
    decrement,
    reset}) => {
    
  return (
    <div>
        <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button> <br /> <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
