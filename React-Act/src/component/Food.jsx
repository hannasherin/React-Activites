import { useState } from "react";


function Food(){

const[food,setFood]=useState('')

const handleChange=(e)=>{
    setFood(e.target.value)
}
    return(
        <>
        <h2>Your Favoirate Food:</h2>
        <select onChange={handleChange}>
            <option value="">--Choose--</option>
            <option value="Biriyani">Biriyani</option>
            <option value="Mamdi">Mandi</option>
            <option value="Seafood">Seafood</option>
        </select>

        <p>{food ? `I love ${food}`:" No food Selected yet"}</p>
        
        </>
    )
}
export default Food