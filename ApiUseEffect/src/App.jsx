import { useState,useEffect } from "react"
function App() {
 const [userData,setUserData]=useState([])

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=> res.json())
  .then((result)=> setUserData(result))
 },[])
 console.log(userData)

  return (
    <>
    <ul>
      {userData.map((item)=>(
         <li key={item.id}>
          <p>Id : {item.id}</p>
          <p>Name : {item.name}</p>
          <p>Email : {item.email}</p>
          <hr />
         </li>
      ))}
      </ul>
    </>
  )
}

export default App
