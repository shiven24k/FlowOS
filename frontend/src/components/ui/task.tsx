import { useState } from "react"

export default function task(){
    const [isActive, setIsActive] = useState(false)
    const checkButton = () =>{
        setIsActive(!isActive)
    }
    function OpenTaskEditor(){
        alert("WELL A task editor will be opened")
    }
    return(
        <>
           <div className="flex p-1 rounded-md items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                <div onClick={()=> checkButton()} className={isActive ? "w-3 h-3 rounded-full bg-green-400":"w-3 h-3 rounded-full bg-amber-50"}></div>
                <p>Task 1</p>
                </div>
                <div onClick={()=>OpenTaskEditor()} className="font-bold cursor-pointer text-amber-50">
                    Edit
                </div>
           </div>
        </>
    )
}