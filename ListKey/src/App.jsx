import React from "react";
import { useState } from "react";

function App(){
const names=['John','Hanna','Zara','Beeena']
  return(
    <>
     <h1>List and Key</h1>

     <ul>
      {names.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
     </ul>
    </>
  )
}
export default App
