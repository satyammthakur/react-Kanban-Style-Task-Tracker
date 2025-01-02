import AddTask from "./components/AddTask"
import { useState} from "react"
import ToDo from "./components/ToDo"
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
      <div>
        
      <h2 
      className="ml-6 
      text-xl font-semibold w-3/4 
      py-2 px-4 bg-gray-300 max-w-lg 
        ">To Do:</h2>
      {taskList.map((task,i)=>
      <>
      <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
      </>
      )}
      </div>
    </>
  )
}

export default App