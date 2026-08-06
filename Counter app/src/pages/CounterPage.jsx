import React, { useState } from 'react'
import Counter from '../components/Counter'

const CounterPage = () => {

    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount((pre)=>pre+1)
    }

    const decrement=()=>{
        setCount((pre)=>pre-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
      <Counter
      count={count}
      setCount={setCount}
      increment={increment}
      decrement={decrement}
      reset={reset}/>
    </div>
  )
}

export default CounterPage
