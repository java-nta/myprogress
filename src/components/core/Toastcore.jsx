import { useEffect} from "react";
import { classes } from "../../utils";

const Toastcore = ({ icon, iconColor, message }) => {
  useEffect(() => {
    const animatingDiv = document.getElementById("toast");
    animatingDiv.classList.remove("-left-full");
    animatingDiv.classList.add("left-10");
    const timeout = setTimeout(() => {
      animatingDiv.classList.remove("left-10");
      animatingDiv.classList.add("-left-full");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      id="toast"
      className="fixed bottom-10 z-50 -left-full transition-all duration-500 ease-in-out flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
    >
      <span className={classes(iconColor)}>{icon}</span>
      <div className="ps-4 text-sm font-normal">{message}</div>
    </div>
  );
};

export default Toastcore;
