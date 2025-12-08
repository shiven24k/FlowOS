import BoardCard from "./Boardcard";

const BoardList: React.FC = () => {
  return (
    <>
      <main className='w-full flex flex-wrap flex-row items-center gap-8 '>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </main>
    </>
  );
};

export default BoardList;
