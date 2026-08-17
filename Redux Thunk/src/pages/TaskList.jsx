import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskFromServer } from '../slice/taskSlice'

const TaskList = () => {

const dispatch=useDispatch()    
const {tasks,isloading,error}=useSelector((state)=>state.taskInfo)
console.log(tasks);

useEffect(()=>{
dispatch(getTaskFromServer())
},[])

  return (
    <div>
      <h2>Task List</h2>

    {tasks.map((item)=>(
        <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <hr />
        </div>
    ))}

    </div>
  )
}

export default TaskList
