import ProjectBox from "../components/sections/projectBox"
export default function project(){
    function createNewBox(){
        alert("Will create other boxex")
    }
    return(
        <>
        <div className="px-5 py-10">
            <button onClick={()=>createNewBox()} className="bg-gray-400 w-[20rem] p-2 rounded-md mb-5">Add Box</button>
            <ProjectBox/>

        </div>
        </>
    )
}