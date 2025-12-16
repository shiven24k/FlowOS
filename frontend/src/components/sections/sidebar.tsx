import type React from "react";
import { Lightbulb, Info } from "lucide-react";
import { Button } from "../ui/button";
import "../../App.css";
import { useState } from "react";
import { AccountMenu } from "../ui/modals";
import { ChevronUp } from "lucide-react";
const SideBar: React.FC = () => {
  const [isOpen, setisOpen] = useState(false); // will control this from redux later
  const [modal, setModal] = useState(false);

  function togglemodal() {
    setModal((prev) => !prev);
  }
  return (
    <>
      <section
        className={`${isOpen === true ? "flex" : "hidden"} md:flex
  w-[12vw] h-screen z-30 py-4 flex-col items-center justify-between`}>
        <div className='w-full h-[80%]  mt-7  p-4'>
          <h1 className='font-bold'>KanFlow</h1>
          <hr />
          <div className='workspace w-full p-4'>
            <h2 className='text-[14px]'>Workspace</h2>
            <div className='workspace w-full h-full'>
              <div className='w-full h-12 hover:bg-gray-300 rounded-md cursor-pointer flex items-center '>
                <h2 className='pl-2'>My Workspace</h2>
              </div>
              <div className='w-full h-12 hover:bg-gray-300 rounded-md cursor-pointer flex items-center '>
                <h2 className='pl-2'>My Workspace</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center mb-12'>
          <div className='w-full h-fit flex flex-col justify-center cursor-pointer items-center rounded-md p-2 '>
            <Button variant='ghost'>
              <Lightbulb className="w-5 h-5" /> FeedBack
            </Button>
            <Button variant='ghost'>
              <Info  className="w-5 h-5"/> Help
            </Button>
          </div>
          <hr className='w-[90%] mt-2 mx-auto' />
        </div>
        <nav className='w-full h-[8vh]  z-40  cursor-pointer rounded-sm p-1'>
          <div className='flex items-center h-full justify-around  hover:bg-gray-300'>
            <div className=' w-14 bg-blue-500 h-14 rounded-sm'></div>
            <div className='flex flex-col w-[50%]'>
              <h1>UserName</h1>
              <h2>useremail</h2>
            </div>
            <ChevronUp
              onClick={() => {
                togglemodal();
              }}
            />
          </div>
        </nav>
        {modal === true && <AccountMenu />}
      </section>
    </>
  );
};

export default SideBar;
