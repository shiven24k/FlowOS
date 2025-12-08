import React, { useState } from "react";
import BoardList from "../Board/BoardList";
import { Button } from "../ui/button";
import { Plus, StarIcon, TimerIcon, Menu } from "lucide-react";
import { CreateBoard } from "../ui/modals";
import { AccountMenu } from "../ui/modals";

const Centerpannel: React.FC = () => {
  const [board, setBoard] = useState<Boolean>(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      {board === true && <CreateBoard />}
      {menu === true && <AccountMenu />}
      <div className=' w-[87vw] mx-auto h-[98vh] my-auto flex-col lg:flex  border-gray-200 bg-white/70 '>
        <div className='w-full flex justify-between'>
          <div className='block px-4 py-3 lg:hidden'>
            <Menu />
          </div>
          <div className='block px-4 py-3 lg:hidden'>
            <button
              className='w-8 h-8 rounded-full bg-gray-500 cursor-pointer'
              onClick={() => {
                setMenu(true);
              }}></button>
          </div>
        </div>
        <main className='w-full lg:w-[85%] px-4 py-12 lg:px-36 lg:py-24 flex flex-col gap-8 rounded-md z-20'>
          <h1 className='text-2xl font-semibold'>Hello Sunehra!</h1>
          <Button variant='primary' size='md' onClick={() => setBoard(true)}>
            <Plus /> Create a new Board
          </Button>
          <section>
            <BoardList></BoardList>
          </section>
        </main>
        <div className='py-34  flex flex-col gap-2 '>
          <div className='w-full h-fit flex gap-1 items-center justify-start text-gray-600 '>
            <StarIcon size={20} />
            <h1>Starred</h1>
          </div>
          <div className='w-full h-fit flex gap-1 items-center justify-start text-gray-600 '>
            <TimerIcon size={20} />
            <h1>Recently Viewed</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Centerpannel;
