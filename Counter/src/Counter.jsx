import { useState } from "react"

const Counter=()=>{

    const [count,setCount]=useState(0)
    const handleInc=()=>{
        setCount((pre)=> pre + 1)
    }
    const handleDec=()=>{
        setCount((pre)=> pre===0 ? 0 : pre-1)
    }
   return(
    <>
    <h1>Hello React</h1>
    <button onClick={handleInc}>Increment</button>
    <button onClick={handleDec}>Decrement</button>
    <button onClick={()=>setCount(0)}> Reset</button>
  <h1>Count : {count}</h1>
    
    </>
   )
}
export default Counter