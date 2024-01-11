import Contactcore from "./core/Contactcore";
import Page from "./layout/Page";
import { GiDiploma } from "react-icons/gi";
import { BiSolidTimer } from "react-icons/bi";
import Skillcore from "./core/Skillcore";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
const AboutMe = () => {
  const [selectedId, setSelectedId] = useState(null);
  const skills = [
    {
      id: 1,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/aftereffect.png",
    },
    {
      id: 2,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/react.png",
    },
    {
      id: 3,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/spring.png",
    },
    {
      id: 4,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/tailwind.png",
    },
    {
      id: 5,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/bootstrap.png",
    },
    {
      id: 6,
      title: "After Effect",
      nv: "Medium",
      img: "/images/assets/spring.png",
    },
  ];
  return (
    <Page title={"About me"}>
      <div className="my-16 flex items-center justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3">
        <img
          src={process.env.PUBLIC_URL + "/images/assets/kenma.jpg"}
          alt="log"
          className="max-h-[200px] rounded-full border-2 border-gray-300 dark:border-gray-700 "
        />
        <div className="flex flex-col h-ful sm:w-2/3 ">
          <p className="text-2xl">
            Hey everyone, I'm Mohamed Assedmer and my neckname is @medo.rox
          </p>
          <p>
            I was born on April 20, 2003, and, like Adolf Hitler, I share the
            same birthdate. However, my passion lies in technology, and I am a
            full-stack developer. My primary tools for crafting dynamic and
            responsive web applications include React.js for the frontend,
            Spring Boot for server-side development, and a blend of Tailwind CSS
            and Bootstrap for styling. I am enthusiastic about creating seamless
            and engaging user experiences, constantly exploring new technologies
            to enhance my skills and contribute to the ever-evolving world of
            web development.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3">
        <h2 className="text-lg font-bold">The educational path</h2>
        <div className="flex flex-col sm:px-12 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[32px] bg-gray-300 dark:bg-gray-700 p-2 rounded-full">
              <GiDiploma />
            </span>
            <p className="text-sm  text-gray-400">
              I obtained my high school diploma in 2021 with a focus on physical
              science
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[32px] bg-gray-300 dark:bg-gray-700 p-2 rounded-full">
              <GiDiploma />
            </span>
            <p className="text-sm  text-gray-400">
              I also received my diploma in information technology and web
              development in 2023 from the National School of Technology
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[32px] bg-gray-300 dark:bg-gray-700 p-2 rounded-full">
              <BiSolidTimer />
            </span>
            <p className="text-sm  text-gray-400">
              Now I study to get my bachelor's degree in Ibno Tofail University.
            </p>
          </div>
        </div>
      </div>
      <div className=" my-10 flex flex-col justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3">
        <h2 className="text-lg font-bold">Experiences</h2>
        <p className="mb-5">
          I have only one professional experience, I was an intern in Sofac
          casablanca for two month, There I knew Spring boot and how the team
          work. Right now I'm locking for side project to improve my skills. I'm
          also a fast learner and I like to work with a team.
        </p>
      </div>
      <div className="relative my-10 flex flex-col justify-center gap-4 flex-wrap  rounded-2xl w-full p-3">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="grid grid-cols-4 gap-4">
          {skills.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1  h-[250px] cursor-pointer"
              exit={{ scale: 0 }}
              onClick={() => setSelectedId(item)}
            >
              <Skillcore img={item.img} />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-100">Tap to view skill details</p>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute  bg-white dark:bg-dark-background h-full w-full flex items-center justify-center rounded-lg h-[250px]shadow-xl"
            >
              <div className="w-[80%] border border-gray-300 dark:border-gray-700 rounded-xl p-3 flex flex-col">
                <div className="w-full flex items-center justify-between px-10">
                  <img
                    src={process.env.PUBLIC_URL + selectedId.img}
                    alt="logo"
                    className="max-h-[82px]"
                  />
                  <button type="button" onClick={() => setSelectedId(null)}>
                    <div className="rotate-45 text-xl text-gray-300 hover:text-gray-600">
                      <FaPlus />
                    </div>
                  </button>
                </div>
                <div className="flex items-center gap-1 px-10">
                  <span className="text-sm text-gray-400">level: </span>
                  <p className="text-sm font-bold">{selectedId.nv}</p>
                </div>
                <div className="px-10">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum non laudantium repudiandae soluta quod! Officia eius
                    explicabo, voluptas, qui temporibus nulla repellat veritatis
                    est quam quo corrupti dolores ullam expedita.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h2 className="text-xl font-m">
        You can check my social media to know me more:
      </h2>
      <div className="grid grid-cols-6  grid-flow-row gap-4 my-10 sm:h-screen">
        <div className="sm:col-span-2  col-span-6">
          <Contactcore img={"/images/assets/_email.png"} />
        </div>

        <div className="sm:col-span-4 col-span-6 overflow-hidden rounded-2xl">
          <Contactcore _video={"/images/assets/video1.mp4"} />
        </div>
        <div className="sm:col-span-4 col-span-6">
          <Contactcore img={"/images/assets/_email.png"} />
        </div>
        <div className="sm:col-span-2 sm:row-span-2 col-span-6">
          <Contactcore img={"/images/assets/facebook.png"} />
        </div>
        <div className="sm:col-span-2 col-span-6">
          <Contactcore img={"/images/assets/linkdin.png"} />
        </div>
        <div className="sm:col-span-2 col-span-6">
          <Contactcore img={"/images/assets/instagram.png"} />
        </div>
      </div>
    </Page>
  );
};

export default AboutMe;
