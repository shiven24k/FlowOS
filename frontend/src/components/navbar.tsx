import React, { useEffect, useState } from "react";
import { Settings } from "lucide-vue-next";
import "../App.css";

const Navbar: React.FC = () => {
  const [modal, setModal] = useState(false);

  function togglemodal() {
    setModal((prev) => !prev);
  }
  return (
    <>
      <nav className='w-full h-[8vh] flex justify-end cursor-pointer p-4'>
        <ul>
          {/* here we will add letter from user email  */}
          <div
            className='w-10 h-10 rounded-full bg-gray-300'
            onClick={() => {
              togglemodal();
            }}></div>
        </ul>
      </nav>
      {modal === true && (
        <div
          className='bg-white h-[30vh] w-[20vw] absolute right-4 top-[10vh] p-2 
            flex flex-col justify-around rounded-sm shadow-xl z-40'>
          <div className='w-full h-[20%] flex gap-2'>
            <div className='w-10 h-10 rounded-full bg-gray-300'></div>
            <div className='flex flex-col'>
              <h1>UserName</h1>
              <h2>useremail</h2>
            </div>
          </div>
          <div className='w-full h-[10%]  flex'>
            {/* <Settings />  gotta add type for this lucdide icon*/}
            <h2>Settings</h2>
          </div>
          <h2>Theme (will add toggle here)</h2>
          <hr />
          <h2>Workspaces</h2>
          <div>Here will be user workspace</div>
          <hr />
          <h2 className='w-full h-[20%] p-2 rounded-sm cursor-pointer hover:bg-gray-200'>
            Logout
          </h2>
        </div>
      )}
    </>
  );
};

export default Navbar;
