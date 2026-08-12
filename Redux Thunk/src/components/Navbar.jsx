import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-amber-700'>
      <ul className='flex space-x-6 text-white font-semibold p-4'>
        <li className='cursor-pointer hover:text-amber-600' >Create </li>
        <li className='cursor-pointer hover:text-amber-600'>Add Task</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
