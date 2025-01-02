import React from 'react'
import { useState , useEffect} from 'react'
function EditTask({task , index , taskList , setTaskList}) {
    const [editModal , setEditModal]= useState(false)
    const [projectName , setProjectName]=useState("")
        const [taskDescription , setTaskDescription]=useState("")
        useEffect(()=>{
            setProjectName(task.projectName)
            setTaskDescription(task.taskDescription)
        },[])
        const handleInput= e=>{
            const name = e.target.name;
            const value = e.target.value;
    
            if(name === "projectName"){
                setProjectName(value);
            }
            if(name === "taskDescription") setTaskDescription(value)
        }
        const handleUpdate= e =>{
            e.preventDefault();
            let taskIdx = taskList.indexOf(task)
            taskList.splice(taskList,1);
            setTaskList(
                [...taskList,{projectName,taskDescription}]
            );
            setEditModal(false)
        }
  return (
    <>
      <button
      onClick={()=>setEditModal(true)}
      className='bg-gray-400
      text-white
      text-sm uppercase font-semibold
      py-1.5 px-3 rounded-lg'>
    Edit</button>
    {editModal ? (
        <>
            <div className='
            flex items-center justify-center
            overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
                <div className='w-9/12 max-w-lg bg-white rounded-lg shadow-md relative
                flex flex-col border-slate-200
                border-t rounded-b'>
                <div
                className='flex flex-row justify-between
                p-5 border bg-white
                '
                >
                <h3 
                className='bg-white text-3xl font-semibold '
                >Edit Task</h3>
                <button
                className='px-1 text-gray-400 float-right
                text-3xl leading-none font-semibold block'
                onClick={()=>setEditModal(false)}
                >
                    X
                </button>
                </div>
                <form className='p-6'>
                    <div>
                    <label 
                    className='uppercase text-gray-700
                    text-xs font-bold mb-2 tracking-wide block
                    '
                    htmlFor='project-name'>
                    Project Name
                    </label>
                    <input 
                    className='w-full
                    bg-gray-200 py-3
                    px-4 mb-5 leading-tight
                    text-gray-700 border border-gray-200 
                    rounded 
                    focus:outline-none
                    focus:bg-white'
                    type="text" 
                    id="project-name"
                    name='projectName'
                    placeholder='Project name'
                    // value={projectName}
                    value={projectName}
                    onChange={handleInput}
                    required
                    /> 
                    </div>
                    <div>
                    <label 
                    className='uppercase text-gray-700
                    text-xs font-bold mb-2 tracking-wide block
                    '
                    htmlFor='project-name'>
                    Task Description
                    </label>
                        <textarea 
                        className='w-full
                        bg-gray-200 py-3
                        px-4 mb-5 leading-tight
                        text-gray-700 border border-gray-200 
                        rounded 
                        focus:outline-none
                        focus:bg-white'
                        id="task-desription"
                        placeholder='Task Description'
                        rows="3"
                        name="taskDescription"
                        value={taskDescription}
                        onChange={handleInput}
                        />
                    </div>

                </form>
                <div className='flex justify-end p-6 border-slate-200
                border-t rounded-b'>
                    <button
                    className='bg-blue-500
                    text-white font-semibold
                    uppercase text-sm px-6 py-3 rounded 
                    hover:opacity-70'
                    onClick={handleUpdate}
                    >
                        Update Task
                    </button>
                </div>


                </div>
                
            </div>
        </>
    ): null}
    </>
  )
}

export default EditTask
