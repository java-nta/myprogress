const Skillcore = ({ img = null, icon = null }) => {
  return (
    <div className="flex w-full h-full justify-center items-center border border-gray-300 dark:border-gray-700 rounded-xl">
      {img && (
        <img
          src={process.env.PUBLIC_URL + img}
          alt="skill"
          className="max-h-[82px] mix-blend-screen"
        />
      )}
      {icon && <div>{icon}</div>}
    </div>
  );
};

export default Skillcore;
