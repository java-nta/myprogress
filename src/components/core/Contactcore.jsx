import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
const Contactcore = ({ img, _video, url, mailto }) => {
  return (
    <motion.div className="relative h-[250px] sm:h-full flex justify-center items-center border rounded-2xl w-full   border-gray-300 dark:border-gray-700 cursor-pointer">
      {img && (
        <img
          src={process.env.PUBLIC_URL + img}
          alt="logo"
          className="max-h-[50px]"
        />
      )}
      {_video && (
        <div className="absolute bg-dark-text">
          <ReactPlayer
            url={process.env.PUBLIC_URL + _video}
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            muted={true}
            className=""
          />
        </div>
      )}
      <motion.div
        className="absolute right-0 bottom-0 m-2 p-3 border-gray-300 dark:border-gray-700 border rounded-full outline-red-500 "
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <NavLink to={url || "mailto:" + mailto} target="_blank">
          <FaExternalLinkAlt className="text-gray-400" />
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default Contactcore;
