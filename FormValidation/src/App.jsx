import { useState } from "react"


function App() {

  // store input data 
  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })

  // store Error message 
  const[errors,setError]=useState({})

  const handleChange=(e)=>{
      const{name,value}=e.target;
      setFormData({...formData,[name]:value})
  }

  const ValidateForm=()=>{
    const newError={}

    // name Validate 
    if(formData.name.trim()===""){
      newError.name="Name is Required"
    }

  //  email validate 
   if(formData.email.trim()===""){
    newError.email="Email is Required"
   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
    newError.email="Enter the valid email "
   }
  //  Password  validate 
  if(formData.password.trim()===""){
    newError.password="Password is Required"
  }else if(formData.password.length<6){
    newError.password="Password must be at least 6"
  } else if(!/[A-Z]/.test(formData.password)){
    newError.password="must contain one Uppercase letter"
  }else if(!/[a-z]/.test(formData.password)){
    newError.password="must contain one lowercase letter"
  }
setError(newError)

return Object.keys(newError).length===0


  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(ValidateForm()){
      alert("form submitted sucessfully")
      console.log(formData);
      setFormData({
        name:'',
        email:'',
        password:'',
      })
      setError({})
      
    }
  }
  console.log(errors);
  

  return (
    <>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name  */}
      <label htmlFor="">Name :</label>
      <input type="text"
      placeholder="Enter Your Name" 
      name="name"
      value={formData.name}
      onChange={handleChange}
      />
      {/* for error  */}
      <p style={{color:"red"}}>{errors.name}</p>
      <br />

        {/* Email  */}
        <label htmlFor="">Email  :</label>
        <input type="email"
        placeholder="Enter Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange} />
        <p style={{color:"red"}}>{errors.email}</p>
        <br />

        {/* Password  */}
        <label htmlFor="">Password :</label>
        <input type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.password}</p>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default App
