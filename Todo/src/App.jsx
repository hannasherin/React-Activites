import { useState } from "react"


function App() {
  const[inputvalue,setInputvalue]=useState('')
  const[data,setData]=useState([])
  
  const handlechange=(e)=>{
    setInputvalue(e.target.value)
  }

  const addTask = () => {
    if (inputValue.trim()) {
      setData([...data, inputValue])
      setInputvalue('')
    }

  }

  const deleteTask = (index) => {

    const is_confirm = window.confirm("Are  sure want to delete this?")
    if (is_confirm) {
      const datas = data.filter((_, inx) => inx != index)
      setData(datas)
      alert("delete Succesfully")
    }
  }

  return (
    <div className="main">

<h1>Todo List</h1>
<hr />
<input type="text"
placeholder="Add New Task"
value={inputvalue}
onChange={handlechange}
 />

<button onClick={addTask}>Add Task</button> 

<ul>
  {data.map((item,index)=>(
    <li key={index}>
      {item}
      <button onClick={()=>deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>


    </div>
     
  )
}

export default App
