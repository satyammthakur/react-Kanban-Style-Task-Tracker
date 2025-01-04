import AddTask from "./components/AddTask"
import { useState , useEffect} from "react"
import ToDo from "./components/ToDo"
import { useDrop } from "react-dnd";
function App() {
  const [taskList , setTaskList]=useState([])
  const [completed , setCompleted] = useState([]);
  useEffect(()=>{
    let array = localStorage.getItem("taskList");
    if(array){
      setTaskList(JSON.parse(array))
    }
  },[])
  const [{isOver} , drop] = useDrop(()=>({
    accept:"todo",
    drop: (item) => addToCompleted(item.id , item.projectName , item.taskDescription
      , item.timeStamp , item.duration
    ), 
    collect: (monitor) =>({
      isOver: !!monitor.isOver(),
    })
  }))
  const addToCompleted = (id,projectName , taskDescription,timeStamp,
    duration) =>{
      const moveTask = taskList.filter((task)=> id === task.id);
      setCompleted((completed)=>[...completed,{moveTask,projectName,taskDescription
        , timeStamp , duration
      }])
  }
  return (
    <>
      <h1 className='text-2xl py-4 pl-6 font-semibold'>Task Tracker</h1>
      <p className="text-xl pl-6">Hi There</p>
      <div className="flex-row flex items-center">
      <p className="text-xl pl-6">Click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <p className="text-xl my-2" > to add a new task</p>
      </div>
      <div className="flex flex-row">
      <div className="w-full">
        
      <h2 
      className="ml-6 
      text-xl font-semibold w-3/4 
      py-2 px-4 bg-gray-300 max-w-lg 
        ">To Do:</h2>
      <div className="ml-6 flex flex-col-reverse">
      {taskList.map((task,i)=>
      <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
      )}
      </div>
      </div>
      <div ref={drop} className="w-full flex flex-col">
      <h2 
      className="ml-6 
      text-xl font-semibold w-3/4 
      py-2 px-4 bg-gray-300 max-w-lg 
        ">Completed:</h2>
        {completed.map((task,i)=>
      <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
      )}
      </div>
      </div>
    </>
  )
}

export default App