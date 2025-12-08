import React from "react";
import SideBar from "../components/sections/sidebar";
import Centerpannel from "../components/sections/centerpannel";

const Home: React.FC = () => {
  return (
    <>
      <div className='w-full h-screen z-30 bg-gray-200'>
        <section className='flex w-full h-full'>
          <div>
            <SideBar />
         
          </div>

          <Centerpannel />
        </section>
      </div>
    </>
  );
};
export default Home;
