export default function homepage() {
    function createProject(){
        window.location.href = '/project'
    }
    return (
        <>
            <div className=" px-20 py-20 ">
                {/* create new board button */}
                <div onClick={() => createProject()} className="flex justify-center items-center rounded-xl bg-[#a8a7a7] h-20 w-60 p-5 hover:bg-[#d1cece] shadow-xl m-10">
                    Create a New Board
                </div>
                <button/>
                {/* boards */}
                <div className="grid grid-cols-4">
                    <div className="relative flex justify-center items-center rounded-xl bg-[#8b8b8b] h-80 w-60 p-5 hover:bg-[#b8b8b8] shadow-xl m-10">
                    <div className="absolute bottom-0 flex flex-col justify-center items-start rounded-b-xl bg-[#a8a7a7] h-30 w-60 p-5 hover:bg-[#d1cece] shadow-xl ">
                        <p>My Project:</p>
                        <p>Last Updated At:</p>
                    </div>

                </div>
                <div className="relative flex justify-center items-center rounded-xl bg-[#8b8b8b] h-80 w-60 p-5 hover:bg-[#b8b8b8] shadow-xl m-10">
                    <div className="absolute bottom-0 flex flex-col justify-center items-start rounded-b-xl bg-[#a8a7a7] h-30 w-60 p-5 hover:bg-[#d1cece] shadow-xl ">
                        <p>My Project:</p>
                        <p>Last Updated At:</p>
                    </div>

                </div>
                <div className="relative flex justify-center items-center rounded-xl bg-[#8b8b8b] h-80 w-60 p-5 hover:bg-[#b8b8b8] shadow-xl m-10">
                    <div className="absolute bottom-0 flex flex-col justify-center items-start rounded-b-xl bg-[#a8a7a7] h-30 w-60 p-5 hover:bg-[#d1cece] shadow-xl ">
                        <p>My Project:</p>
                        <p>Last Updated At:</p>
                    </div>

                </div>
                </div>
            </div>

        </>
    )
}