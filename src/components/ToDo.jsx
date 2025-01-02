import React from 'react'
import EditTask from './EditTask'

function ToDo({task , index , taskList , setTaskList}) {
    const handleDelete=()=>{
        setTaskList((currentTasks) => 
            currentTasks.filter((_, idx) => idx !== index)
        )
    }
  return (
    <>
      <div className='flex flex-col items-start 
      justify-start bg-gray-100 my-4 ml-6 py-4 px-6 w-3/4
      max-w-lg'>
        <div className='flex flex-row w-full justify-between'>
        <p className='font-semibold text-xl'>
            {task.projectName}
        </p>
        <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <p  className='py-2 text-lg'>
            {task.taskDescription}
        </p>
        <div className='w-full flex justify-center'>
            <button 
            onClick={handleDelete}
            className='bg-red-500 text-white
            text-sm uppercase font-semibold
            py-1.5 px-3 mt-6 mb-1 rounded-lg'>Delete</button>

        </div>
      </div>
    </>
  )
}

export default ToDo
