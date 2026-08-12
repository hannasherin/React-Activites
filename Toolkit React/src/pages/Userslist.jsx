import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../slice/userslice'

const Userslist = () => {

const user = useSelector((state)=>state.userInfo.users)
// console.log(user);

const dispatch=useDispatch()

const handleDelete=(index)=>{
  dispatch(deleteUser(index))
}

  return (
    <div>
      <h1>UsersList</h1>
      <div>
      {user.map((item,i)=>(
        <li key={i}>
          <p>{item.name}</p>
          <p>{item.age}</p>
          <p>{item.email}</p>
          <button onClick={()=>handleDelete(i)}>Delete</button>
          <hr />
        </li>
      ))}
     </div>
    </div>
  )
}

export default Userslist
