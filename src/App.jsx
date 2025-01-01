import AddTask from "./components/AddTask"
import { useState } from "react"
function App() {
  const [taskList , setTaskList]=useState([])
  // console.log(taskList);
  return (
    <>
      <h1 className='text-2xl py-4 pl-6 font-semibold'>Task Tracker</h1>
      <p className="text-xl pl-6">Hi There</p>
      <div className="flex-row flex items-center">
      <p className="text-xl pl-6">Click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <p className="text-xl my-2" > to add a new task</p>
      </div>
      {taskList.map((task,i)=>
      <>
      <p>{task.projectName}</p>
      <p>{task.taskDescription}</p>
      </>
      )}
    </>
  )
}

export default App