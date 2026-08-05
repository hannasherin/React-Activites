import { useEffect, useState } from "react"
import api from "./api/axios"

function App() {

  const[studentData,setStudentData]=useState([])
  const fetchData=async()=>{
    const  response=await api.get("/students")
    const data=await response.data
    setStudentData(data)
  }

  useEffect(()=>{
     fetchData()
  },[])

  return (
    <>
    <h1>Student Lists</h1>
    <ul>
      {studentData.map((item)=>(
        <li key={item.id}>
              <p>Id : {item.id} </p>
              <p>Name : {item.name}</p>
              <p>Email : {item.email}</p>
              <p>Course : {item.course}</p>
              <hr />
        </li>
        
      ))}
    </ul>
    </>
  )
}

export default App
