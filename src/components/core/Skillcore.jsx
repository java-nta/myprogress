const Skillcore = ({ img }) => {
  return (
    <div className="flex w-full h-full justify-center items-center border border-gray-300 dark:border-gray-700 rounded-xl">
      <img
        src={process.env.PUBLIC_URL + img}
        alt="skill"
        className="max-h-[82px] mix-blend-screen"
      />
    </div>
  );
};

export default Skillcore;
