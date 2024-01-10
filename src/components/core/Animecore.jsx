import React, { useEffect, useState } from "react";
import { BiSolidVideos } from "react-icons/bi";
import { TiArrowUpThick } from "react-icons/ti";
import { classes } from "../../utils";
import { FaEdit, FaPlay, FaTrash } from "react-icons/fa";
const Animecore = ({ title, img, episodes, description, current }) => {
  const [textDirection, setTextDirection] = useState("");
  const [isShow, setIsShow] = useState(false);
  const containsArabic = (text) => {
    const arabicRegex =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return arabicRegex.test(text);
  };
  const toggleOptions = () => {
    setIsShow((preIsShow) => !preIsShow);
  };
  useEffect(() => {
    if (containsArabic(description)) {
      setTextDirection("text-end");
    }
  }, [description]);
  return (
    // <NavLink
    //   to={"https://anime4up.cam/episode/dosanko-gal-wa-namara-menkoi-الحلقة-1/"}
    //   target="_blank"
    // >
    // </NavLink>
    <div
      onClick={toggleOptions}
      className="relative cursor-pointer w-[350px] h-[350px] overflow-hidden shadow-lg  rounded-2xl smooth-transition dark:bg-dark-component "
    >
      <div className="flex z-40 gap-2 absolute top-0 p-2 text-white">
        <div className="flex items-center gap-1 bg-dark-background p-1 rounded-lg">
          <BiSolidVideos className="text-[12px]" />
          <span className="font-medium text-sm">{episodes}</span>
        </div>
        <div className="flex items-center gap-1 bg-dark-background p-1 rounded-lg">
          <FaPlay className="text-[12px]" />
          <span className="font-medium text-sm">{current}</span>
        </div>
      </div>
      <div
        className={classes(
          "absolute top-0 flex flex-col gap-3 items-center transition-all duration-500 ease-in-out",
          isShow ? "-right-14 opacity-100" : "-right-0 opacity-0"
        )}
      >
        <button
          type="button"
          className="smooth-transition text-dark-component text-5xl font-medium hover:text-dark-text"
        >
          <TiArrowUpThick />
        </button>
        <button
          type="button"
          className="smooth-transition rotate-180 text-dark-component text-5xl font-medium hover:text-dark-text"
        >
          <TiArrowUpThick />
        </button>
        <button
          type="button"
          className="smooth-transition text-dark-component text-4xl ml-2   font-medium hover:text-dark-text"
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="smooth-transition text-dark-component text-4xl    font-medium hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
      <img
        src={process.env.PUBLIC_URL + img}
        alt="anime"
        className="z-50 object-cover h-[200px] w-full smooth-transition hover:scale-105 hover:rounded-none rounded-t-2xl"
      />
      <h2 className="font-medium text-lg p-1">{title}</h2>
      <p
        className={classes(
          "text-sm px-2 overflow-hidden smooth-transition",
          textDirection
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default Animecore;
