import Task from "../ui/task"
export default function ProjectBox() {
  function addTask(){
    alert("This will add task")
  }
  return (
    <div className="bg-gray-400 w-[20rem] p-2 rounded-md">
      <p className=" font-bold text-amber-50">Topic</p>
      {/* we use map here for tasks */}
      <Task/>
      <p onClick={()=>addTask()} className="cursor-pointer font-bold text-amber-50">ADD TASK</p>
      
    </div>
  )
}