import { FaHome, FaMoon, FaSun, FaInfo, FaBars } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";

import { classes } from "../utils";
import Linkcore from "./core/Linkcore";
import { useState } from "react";
import { SiPivotaltracker } from "react-icons/si";
const Sidebare = ({ toggleDarkMode, isDarkMode }) => {
  /*  *********
      Navigation links
      ********** */
  const nav = [
    { text: "Home", url: "/home", icon: <FaHome /> },
    { text: "About me", url: "/about", icon: <FaInfo /> },
    { text: "Contact me", url: "/contact", icon: <GrContact /> },
  ];
  const projectsNav = [
    { text: "User manager", url: "/usermanager", icon: <MdManageAccounts /> },
    {
      text: "Anime Tracker",
      url: "/animetracker",
      icon: <SiPivotaltracker />,
    },
  ];
  const settingsNav = [
    {
      text: isDarkMode ? "Light mode" : "Dark mode",
      url: false,
      icon: isDarkMode ? <FaSun /> : <FaMoon />,
      clickhandler: toggleDarkMode,
      style: isDarkMode
        ? { button: "bg-yellow-300 text-black rounded-md" }
        : {
            button: "bg-dark-primary text-dark-text rounded-md",
            icon: "text-yellow-300",
          },
    },
    { text: "Profil", url: "/login", icon: <FaCircleUser /> },
  ];
  // MENU TOGGLE
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled((preIsToggled) => !preIsToggled);
  };
  return (
    <div
      className={classes(
        "py-3 items-center w-[230px] lg:items-stretch justify-between px-2 lg:px-4 dark:text-dark-text  translate-y-14 flex flex-col  shadow-md rounded-md bg-white  dark:bg-dark-component",
        isDarkMode && "bg-dark-component rounded-md"
      )}
    >
      {/* Button to show menu in small width */}
      <button
        type="button"
        onClick={toggleMenu}
        className="sm:hidden px-4 py-2 rounded-md outline-none border-2 hover:bg-blue-100 border-transparent hover:scale-105 dark:hover:bg-dark-backgroundL dark:hover:border-dark-background"
      >
        <FaBars />
      </button>
      <div>
        <div
          className={classes(
            "flex-col  sm:flex transition duration-300 ease-in-out",
            isToggled ? "block" : "hidden"
          )}
        >
          <p className="dark:text-gray-200 hidden lg:block">Menu</p>
          <ul>
            {nav.map((i) => (
              <li key={i.text} className="my-2">
                <Linkcore text={i.text} url={i.url} icon={i.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classes(
            "flex-col  sm:flex",
            isToggled ? "block" : "hidden"
          )}
        >
          <p className="dark:text-gray-200 hidden lg:block">Projects</p>
          <ul>
            {projectsNav.map((i) => (
              <li key={i.text} className="my-2">
                <Linkcore text={i.text} url={i.url} icon={i.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div
          className={classes(
            "flex-col  sm:flex",
            isToggled ? "block" : "hidden"
          )}
        >
          <p className="dark:text-gray-200 hidden lg:block">Settings</p>
          <ul>
            {settingsNav.map((i) => (
              <li key={i.text} className="my-2">
                <Linkcore
                  text={i.text}
                  url={i.url}
                  icon={i.icon}
                  clickhandler={i.clickhandler}
                  style={i.style}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
