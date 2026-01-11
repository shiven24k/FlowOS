import React from "react";
// import Navbar from "../components/navbar";
import SideBar from "../components/sections/sidebar";
import Homepage from "../components/sections/homepage";
const Home: React.FC = () => {
  return (
    <>
    <div className="flex">
      <SideBar/>
      <Homepage/>
    </div>
      
    </>
  );
};
export default Home;