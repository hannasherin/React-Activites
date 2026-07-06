import { useState } from "react"

function DisFruits(){
    const[fruits,setFruits]=useState([
        "Apple",
        "Banana",
        "Orange",
        "Mango"
    ])
    return(
        <>
        <h1>Total Fruits : {fruits.length}</h1>
        <ul>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>

        
        </>
    )
}
export default DisFruits