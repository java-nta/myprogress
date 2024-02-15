import { FaHome, FaMoon, FaSun, FaInfo, FaBars } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { GiCardAceClubs } from "react-icons/gi";
import { classes } from "../utils";
import Linkcore from "./core/Linkcore";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
const Sidebare = ({ toggleDarkMode, isDarkMode }) => {
  const { token, logout } = useAuth();
  /*  *********
      Navigation links
      ********** */
  const nav = [
    { text: "Home", url: "/home", icon: <FaHome /> },
    { text: "About me", url: "/aboutme", icon: <FaInfo /> },
  ];
  const projectsNav = [
    { text: "Chat App", url: "/chat", icon: <IoIosChatbubbles /> },
    { text: "User manager", url: "/usermanager", icon: <MdManageAccounts /> },
    // { text: "Connections", url: "/connections", icon: <FaLink /> },
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
  ];
  const gamesNav = [
    { text: "BlackJack", url: "/blackjack", icon: <GiCardAceClubs /> },
  ];
  const profilNav = [
    { text: "Profil", url: "/profil", icon: <FaCircleUser /> },
    {
      text: "Log out",
      url: false,
      icon: <IoLogOut />,
      clickhandler: logout,
      style: {
        button:
          "transition duration-300 ease-in-out hover:bg-blue-100 w-full  dark:hover:bg-dark-backgroundL dark:hover:border-dark-background",
      },
    },
  ];
  // MENU TOGGLE
  const [isToggled, setIsToggled] = useState(false);

  // profil menu toggle
  const [isProfilToggeled, setIsProfilToggled] = useState(false);
  const toggleMenu = () => {
    setIsToggled((preIsToggled) => !preIsToggled);
  };
  return (
    <div
      className={classes(
        "py-3 items-center lg:w-[230px] lg:items-stretch justify-between px-2 lg:px-4 dark:text-dark-text   flex flex-col  shadow-sm rounded-md bg-white  dark:bg-dark-background",
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

          <AnimatePresence>
            {token ? (
              <div className="relative">
                <AnimatePresence>
                  {isProfilToggeled && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col absolute bg-white dark:bg-dark-background w-full -top-28 rounded-md "
                    >
                      <ul>
                        {profilNav.map((i) => (
                          <li
                            key={i.text}
                            className="my-2"
                            onClick={() =>
                              setIsProfilToggled(
                                (preIsProfilToggled) => !preIsProfilToggled
                              )
                            }
                          >
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
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() =>
                    setIsProfilToggled(
                      (preIsProfilToggled) => !preIsProfilToggled
                    )
                  }
                  type="button"
                  className="flex items-center border-2 rounded-md border-transparent gap-2 px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-100   dark:hover:bg-dark-backgroundL dark:hover:border-dark-background w-full"
                >
                  <MdManageAccounts />
                  <span className="hidden lg:block">Manage</span>
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <Linkcore icon={<IoLogIn />} url={"/login"} text={"Login"} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
