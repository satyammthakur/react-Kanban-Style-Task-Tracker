import React from 'react'
import { useState } from 'react'
function AddTask() {
    const [addModal , setAddModal]=useState(false)
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
                    placeholder='Project name' /> 
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
                        name="" id="task-desription"
                        placeholder='Task Description'
                        rows="3"
                        >

                        </textarea>
                    </div>

                </form>
                <div className='flex justify-end p-6 border-slate-200
                border-t rounded-b'>
                    <button
                    className='bg-blue-500
                    text-white font-semibold
                    uppercase text-sm px-6 py-3 rounded 
                    hover:opacity-70'
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
