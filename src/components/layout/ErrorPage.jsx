import { classes } from "../../utils";
import Linkcore from "../core/Linkcore";

const ErrorPage = ({ code, message, icon, style, erroIcon }) => {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
  const goBack = () => {
    window.history.back();
  };
  console.log(isDarkMode);
  return (
    <div
      className={classes(
        "flex flex-col items-center h-screen p-10 gap-5",
        isDarkMode ? "dark" : "light"
      )}
    >
      <h1 className="text-2xl font-bold">
        {code}
        <span className="dark:text-white">{erroIcon}</span>
      </h1>
      <p>{message}</p>
      <Linkcore
        text={"Go back"}
        icon={icon}
        clickhandler={goBack}
        style={style}
      />
    </div>
  );
};

export default ErrorPage;
