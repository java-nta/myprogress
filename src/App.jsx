import React, { useState } from "react";
import Sidebare from "./components/Sidebare";
import { Outlet } from "react-router-dom";
import { classes } from "./utils";

const App = () => {
  /*  *********
      DARK MODE
      ********** */
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());
  };

  return (
    <div
      className={classes(
        "h-screen flex gap-4 py-5 px-3 lg:px-20 relative w-full",
        isDarkMode ? "dark" : "light"
      )}
    >
      <aside className="sm:relative absolute">
        <Sidebare toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </aside>
      <main className="w-full my-5 sm:mt-0  mt-32 h-full  overflow-y-auto">
        <Outlet />
      </main>
      {/* <aside className="fixed left-[3%] z-40 transition-transform translate-x-0 ">
        <Sidebare toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </aside>
      <main className="h-screen rounded-md px-[10px] lg:px-[50px] sm:pl-[15%] sm:pr-[5%] pt-32 sm:pt-10 lg:pl-[26%] overflow-auto  overflow-x-hidden">
        <Outlet />
      </main> */}
    </div>
  );
};

export default App;
