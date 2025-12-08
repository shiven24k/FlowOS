const BoardCard: React.FC = () => {
  return (
    <>
      <section className='w-[35vw] h-[15vh] overflow-auto lg:w-[15vw]  lg:h-[20vh] bg-white shadow-md  rounded-md cursor-pointer'>
        <div className='image w-full rounded-t-md h-1/2 bg-blue-500'></div>
        <div>
          <h1>BoardName</h1>
        </div>
      </section>
    </>
  );
};

export default BoardCard;
