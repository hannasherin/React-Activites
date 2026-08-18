import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getTaskFromServer } from '../slice/taskSlice'

const TaskList = () => {

  const dispatch = useDispatch()
  const { tasks, isloading, error } = useSelector((state) => state.taskInfo)
  console.log(tasks);

  useEffect(() => {
    dispatch(getTaskFromServer())
  }, [])

  const handleDelete=(id)=>{
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <h2>Task List</h2>
      {isloading && <h1 className='font-bold text-4xl text-amber-50'>Loading...</h1>}
      {error && <h1 className='font-bold text-4xl text-red-500'>Server Error</h1>}
      {tasks.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition"
        >
          <p className="font-semibold text-gray-700">ID: {item.id}</p>
          <p className="text-lg font-bold text-gray-800">{item.title}</p>
          <p className="text-gray-600">{item.description}</p>

          <div className="flex gap-4 mt-3">
            <button
              className="px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

            <button
              className="px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Edit
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default TaskList
