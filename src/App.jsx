import AddTask from "./components/AddTask"

function App() {


  return (
    <>
      <h1 className='text-2xl py-4 pl-6 font-semibold'>Task Tracker</h1>
      <p className="text-xl pl-6">Hi There</p>
      <div className="flex-row flex items-center">
      <p className="text-xl pl-6">Click</p>
      <AddTask/>
      <p className="text-xl my-2" > to add a new task</p>
      </div>
      
    </>
  )
}

export default App