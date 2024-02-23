import { classes } from "../../utils";

const Cardcore = ({ icon, title, body }) => {
  return (
    <div
      className={classes(
        "flex flex-col w-full h-full transition duration-300 ease-in-out cursor-pointer items-center p-2 border dark:border-gray-700 rounded-md  gap-y-3 hover:translate-y-4"
      )}
    >
      <span className="text-7xl">{icon}</span>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-center text-sm font-medium ">{body}</p>
    </div>
  );
};

export default Cardcore;
