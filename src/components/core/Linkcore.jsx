import { NavLink, useLocation } from "react-router-dom";
import { classes } from "../../utils";

const Linkcore = ({ text, url, icon, clickhandler = () => {}, style = {} }) => {
  const loc = useLocation();
  const isActive = loc.pathname === url;
  return (
    <>
      {url ? (
        <NavLink
          to={url}
          className={classes(
            " flex items-center border-2 rounded-md border-transparent gap-2 px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-100  hover:scale-105 dark:hover:bg-dark-backgroundL dark:hover:border-dark-background",
            isActive &&
              "bg-blue-100 dark:bg-dark-backgroundL dark:border-dark-background dark:text-dark-text "
          )}
        >
          <span>{icon}</span>
          <span className="hidden lg:block">{text}</span>
        </NavLink>
      ) : (
        <button
          className={classes(
            "flex items-center ml-0.5  gap-2 px-4 py-2",
            style.button
          )}
          onClick={clickhandler}
        >
          <span className={style.icon}>{icon}</span>
          <span className="hidden lg:block">{text}</span>
        </button>
      )}
    </>
  );
};

export default Linkcore;
