import React from 'react'
import { useState } from 'react'
function AddTask({taskList , setTaskList}) {
    const [addModal , setAddModal]=useState(false)
    const [projectName , setProjectName]=useState("")
    const [taskDescription , setTaskDescription]=useState("")
    const [errorMessage , setErrorMessage] = useState("");

    const handleInput= e=>{
        const name = e.target.name;
        const value = e.target.value;

        if(name === "projectName"){
            setProjectName(value);
            setErrorMessage("")
        }
        if(name==="projectName" && value===""){
            setErrorMessage("Enter project name to continue")
        }
        if(name === "taskDescription") setTaskDescription(value)
    }
    const handleAdd= e =>{
        e.preventDefault();
        if(!projectName){
            setErrorMessage("Enter project name to continue")
        }
        else{
            let timeStamp = new Date().getTime();
            let tempList = taskList;
            tempList.push({
                projectName,
                taskDescription,
                timeStamp: timeStamp,
                duration: 0
            })
            localStorage.setItem("taskList" , JSON.stringify(tempList))
            window.location.reload()
            setAddModal(false)
            setProjectName("")
            setTaskDescription("") 
        }
        

    }
    // console.log(taskList);
  return (
    <>
    <button 
    className='bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2 5 rounded hover:opacity-70'
    type="button"
    onClick={()=>setAddModal(true)}
    >
        + New
    </button>
    {addModal ? (
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
                >Add New Task</h3>
                <button
                className='px-1 text-gray-400 float-right
                text-3xl leading-none font-semibold block'
                onClick={()=>setAddModal(false)}
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
                    <p 
                    className='text-red-500
                    text-center mt-2 mb-5'>{errorMessage}</p>
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
                    onClick={handleAdd}
                    >
                        Add Task
                    </button>
                </div>


                </div>
                
            </div>
        </>
    ): null}
    </>
  )
}

export default AddTask
