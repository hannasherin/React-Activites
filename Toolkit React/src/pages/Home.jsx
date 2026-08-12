import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../slice/userslice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[inputData,setInputData]=useState({
        name:'',
        age:'',
        email:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setInputData({...inputData,[name]:value})
    }

    const dispatch=useDispatch()
    const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(setUser(inputData))
    setInputData({
      name:'',
      age:'',
      email:''
    })
    alert('User Created Successfully')
    setTimeout(() => {
      navigate('/users  ')
    }, 1000);
  }

  return (
    <div>
      <h1>Create User</h1>
       <form onSubmit={handleSubmit}>

       <input type="text"
       name='name'
       placeholder='Enter your name'
       value={inputData.name}
       onChange={handleChange}
        />
       <p></p>
       <input type="number"
       name='age'
       placeholder='Enter your age'
       value={inputData.age}
       onChange={handleChange} />
       <p></p>
       <input type="email"
       name='email'
       placeholder='Enter your email'
       value={inputData.email} 
       onChange={handleChange}/>
       <p></p>
       <button>Create User</button>

       </form>

    </div>
  )
}

export default Home

