import {
  FaHome,
  FaMoon,
  FaSun,
  FaInfo,
  FaBars,
  FaLink,
  FaNode,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import { FaCircleUser, FaGear } from "react-icons/fa6";
import { GiCardAceClubs } from "react-icons/gi";
import { classes } from "../utils";
import Linkcore from "./core/Linkcore";
import { useState } from "react";

const Sidebare = ({ toggleDarkMode, isDarkMode }) => {
  /*  *********
      Navigation links
      ********** */
  const nav = [
    { text: "Home", url: "/home", icon: <FaHome /> },
    { text: "About me", url: "/aboutme", icon: <FaInfo /> },
  ];
  const projectsNav = [
    { text: "User manager", url: "/usermanager", icon: <MdManageAccounts /> },
    { text: "Connections", url: "/connections", icon: <FaLink /> },
    // {
    //   text: "Anime Tracker",
    //   url: "/animetracker",
    //   icon: <SiPivotaltracker />,
    //   isDisable: true
    // },
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
    { text: "Testing", url: "/testing", icon: <FaGear /> },
    { text: "Profil", url: "/profil", icon: <FaCircleUser /> },
    { text: "Login", url: "/login", icon: <FaNode /> },
  ];
  const gamesNav = [
    { text: "BlackJack", url: "/blackjack", icon: <GiCardAceClubs /> },
  ];
  // MENU TOGGLE
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled((preIsToggled) => !preIsToggled);
  };
  return (
    <div
      className={classes(
        "py-3 items-center lg:w-[230px] lg:items-stretch justify-between px-2 lg:px-4 dark:text-dark-text  translate-y-14 flex flex-col  shadow-sm rounded-md bg-white  dark:bg-dark-background",
        isDarkMode && " rounded-md"
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
                <Linkcore
                  text={i.text}
                  url={i.url}
                  icon={i.icon}
                  isDarkMode={i.isDisable}
                />
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
          <p className="dark:text-gray-200 hidden lg:block">Games</p>
          <ul>
            {gamesNav.map((i) => (
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
