import React, { useState } from 'react'

const Home = () => {

    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange=(e)=>{
             const {name,value}=e.target;
             setInputData({...inputData,[name]:value})
    }

    return (
        <div>
            <h1>Home page</h1>
            <form action="">

                <input type="text"
                    placeholder='Enter Your Name'
                    name='name'
                    value={inputData.name}
                    onChange={handleChange}
                />
                <p></p>

                <input type="number"
                placeholder='Enter Your Age'
                name='age'
                value={inputData.age} 
                onChange={handleChange}
                />
                <p></p>

                <input type="email"
                placeholder='Enter Your Email'
                name='email'
                value={inputData.email}
                onChange={handleChange} />
                <p></p>

                <button>Create User</button>

            </form>
        </div>
    )
}

export default Home
