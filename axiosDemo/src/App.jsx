import { useEffect, useState } from "react"
import api from "./api/axios"

function App() {

const[studentData,setStudentData]=useState([])

const fetchData=async()=>{
try {
  const response=await api.get('/students')
  const data=await response.data
  setStudentData(data)
} catch (error) {
  console.log('server Error');
  
}
}
useEffect(()=>{
fetchData()
},[])

const deleteStudent=async(id)=>{
  const is_confirmed=window.confirm("Are You sure to delete this")
  if(is_confirmed){
    await api.delete(`/students/${id}`)
    fetchData()
  }
}
  
  return (
    <>
    
    <ul>
      {studentData.map((item)=>(
        <li key={item.id}>
            <p>Id :{item.id}</p>
            <p>Name :{item.name}</p>
            <p>Email :{item.email}</p>
            <p>Course :{item.course}</p>
            <button type="submit" onClick={()=>deleteStudent(item.id)}>Delete</button>
            <hr />
        </li>
      ))}
    </ul>
    
    </>
  )
}

export default App
