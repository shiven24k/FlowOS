import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { AccountMenu } from "./ui/modals";
import "../App.css";

const Navbar: React.FC = () => {
  const [modal, setModal] = useState(false);

  function togglemodal() {
    setModal((prev) => !prev);
  }

  return (
    <>
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
    </>
  );
};

export default Navbar;
