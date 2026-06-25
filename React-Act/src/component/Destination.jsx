import { useState } from "react"
function Destination(){
const[desty,setDesty]=useState("")

const handleChange=(e)=>{
 setDesty(e.target.value)
}
    return(
        <>
        <h1>Tick Your Favorite Destination</h1>
        <select onChange={handleChange}>
            <option value="">--Choose--</option>
            <option value="Paris">Paris</option>
            <option value="NewsLand">NewsLand</option>
            <option value="SwezerLand">SwezerLand</option>
        </select>
        <p>{ desty ? `you selected : ${desty}` : "No destination Chosen yet"}</p>
        </>
    )
}
export default Destination