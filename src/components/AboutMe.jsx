import Contactcore from "./core/Contactcore";
import Page from "./layout/Page";
import { GiDiploma } from "react-icons/gi";
import { BiSolidTimer } from "react-icons/bi";
import Skillcore from "./core/Skillcore";
import { FiFramer } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
const AboutMe = () => {
  const [selectedId, setSelectedId] = useState(null);
  const skills = [
    {
      id: 1,
      title: "After Effect",
      nv: "Expert",
      img: "/images/assets/aftereffect.png",
      description:
        "🎬 With years of experience mastering After Effects, I've honed my skills to perfection in crafting visually stunning AMVs. Explore the seamless integration of animation and music, brought to life through the power of After Effects. Click the link below to experience the magic of anime like never before! ",
    },
    {
      id: 2,
      title: "ReactJs",
      nv: "Medium",
      img: "/images/assets/react.png",
      description:
        "💻 As a devoted enthusiast of React.js, I've spent a dedicated year mastering both front-end and back-end development. This app is a testament to that commitment, meticulously crafted with React.js to deliver a seamless user experience. Click the link below to explore the synergy of technology and innovation! 🚀 ",
    },
    {
      id: 3,
      title: "Spring Boot",
      nv: "Medium",
      img: "/images/assets/spring.png",
      description:
        "💼 With a year dedicated to mastering Spring Boot, I've delved deep into topics such as authentication using UserDetails service with roles, implementing JPA CRUD operations, and effective exception handling. This project showcases the culmination of that expertise. Click the link below to witness the power of seamless backend solutions! 🔒",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      nv: "Expert",
      img: "/images/assets/tailwind.png",
      description:
        "🎨 As a seasoned designer, I've mastered both CSS and Bootstrap, but it's Tailwind CSS that truly captivates me. With its innovative approach to styling, Tailwind CSS offers a refreshing alternative to traditional CSS and Bootstrap. Click the link below to experience the seamless fusion of functionality and aesthetics! ✨",
    },
    {
      id: 5,
      title: "Bootstrap",
      nv: "Expert",
      img: "/images/assets/bootstrap.png",
      description:
        "🎨 As a seasoned designer, I've honed my skills with CSS and Bootstrap, mastering their intricacies. Yet, it's Bootstrap that truly resonates with me for its robust framework and versatile components. Click the link below to explore how Bootstrap elevates web design to new heights! ✨",
    },
    {
      id: 6,
      title: "Frame motion",
      nv: "Beginner",
      icon: <FiFramer className="text-[42px]" />,
      description:
        "💫 While still in the early stages of learning, I've already begun to harness the power of Framer Motion to bring my app to life with captivating animations. Click the link below to experience the seamless fusion of technology and creativity! 🎥 ",
    },
  ];
  const divAnimation = {
    init: {
      opacity: 0,
      scale: 0.5,
    },
    load: {
      opacity: 1,
      scale: [0.5, 1.02, 1],
      transition: (i) => ({
        duration: i,
        ease: "easeInOut",
      }),
    },
  };

  return (
    <Page title={"About me"}>
      {/* ME */}
      <motion.div
        className="animated-div my-16 flex items-center justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3"
        custom={0.5}
        initial="init"
        variants={divAnimation}
        animate="load"
      >
        <div className="w-[150px] h-[150px] border-2 rounded-full overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + "/images/assets/me.png"}
            alt="log"
            className="object-cover scale-150 border-gray-300 dark:border-gray-700"
          />
        </div>

        <div className="flex flex-col h-ful sm:w-2/3 ">
          <p className="text-2xl">Hey everyone, I'm Mohamed Assedmer.</p>
          <p>
            I was born on April 20, 2003, my passion lies in technology, and I
            am a full-stack developer. My primary tools for crafting dynamic and
            responsive web applications include React.js for the frontend,
            Spring Boot for server-side development, and a blend of Tailwind CSS
            and Bootstrap for styling. I am enthusiastic about creating seamless
            and engaging user experiences, constantly exploring new technologies
            to enhance my skills and contribute to the ever-evolving world of
            web development.
          </p>
        </div>
      </motion.div>
      {/* EDUCATION */}
      <motion.div
        custom={10}
        initial="init"
        className="animated-div flex flex-col justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3"
        variants={divAnimation}
        animate="load"
      >
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
      </motion.div>
      {/* EXP */}
      <motion.div
        className=" my-10 flex flex-col justify-center gap-4 flex-wrap border rounded-2xl w-full border-gray-300 dark:border-gray-700 p-3"
        variants={divAnimation}
        custom={15}
        initial="init"
        animate="load"
      >
        <h2 className="text-lg font-bold">Experiences</h2>
        <p className="mb-5">
          I was an intern in Sofac casablanca for two month, There I knew Spring
          boot and how the team work. Right now I'm locking for side project to
          improve my skills. I'm also a fast learner and I like to work with a
          team. <br />I worked in many side project.
        </p>
      </motion.div>
      {/* SKILLS */}
      <div className="group relative my-10 flex flex-col justify-center gap-4 flex-wrap  rounded-2xl w-full p-3 overflow-hidden">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="grid sm:grid-cols-3  gap-4">
          {skills.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="col-span-1  h-[250px] cursor-pointer "
              exit={{ scale: 0 }}
              onClick={() => setSelectedId(item)}
            >
              <Skillcore img={item.img} icon={item.icon} />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-100 dark:text-dark-component group-hover:text-dark-background dark:group-hover:text-dark-text smooth-transition">
          Tap to view skill details
        </p>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute  bg-white dark:bg-dark-background h-full w-[100%] flex items-center justify-center rounded-lg h-[250px]shadow-xl"
            >
              <div className="w-[80%] border border-gray-300 dark:border-gray-700 rounded-xl p-3 flex flex-col">
                <div className="relative w-full flex items-center justify-between px-10">
                  <div className="flex itemx-center gap-4">
                    {selectedId.img && (
                      <img
                        src={process.env.PUBLIC_URL + selectedId.img}
                        alt="logo"
                        className="max-h-[82px]"
                      />
                    )}
                    {selectedId.icon && selectedId.icon}
                    <h1 className="font-bold text-4xl">{selectedId.title}</h1>
                  </div>
                  <button type="button" onClick={() => setSelectedId(null)}>
                    <div className="sm:relative absolute top-0 right-0  rotate-45 text-xl text-gray-300 hover:text-gray-600">
                      <FaPlus />
                    </div>
                  </button>
                </div>
                <div className="flex items-center gap-1 px-10 my-2">
                  <span className="text-sm text-gray-400">level: </span>
                  <p className="text-sm font-bold bg-gray-300 dark:bg-dark-component p-0.5 rounded-md">
                    {selectedId.nv}
                  </p>
                </div>
                <div className="px-10">
                  <p>{selectedId.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* SOCIAL MEDIA */}
      <h2 className="text-xl font-m">You can check my social media:</h2>
      <div className="grid grid-cols-6  grid-flow-row gap-4 my-10 sm:h-screen">
        <div className="sm:col-span-2  col-span-6">
          <Contactcore
            img={"/images/assets/email.png"}
            mailto={"javanta.dev@gmail.com"}
          />
        </div>

        <div className="sm:col-span-4 col-span-6 overflow-hidden rounded-2xl">
          <Contactcore
            _video={"/images/assets/video1.mp4"}
            url={"https://youtu.be/ihKOzizyWo4?si=2C4dwcg35zdVic7V"}
          />
        </div>
        <div className="sm:col-span-4 col-span-6">
          <Contactcore
            img={"/images/assets/discord.png"}
            url={"https://discord.gg/ATj24dC9EE"}
          />
        </div>
        <div className="sm:col-span-2 sm:row-span-2 col-span-6">
          <Contactcore
            img={"/images/assets/facebook.png"}
            url={"https://www.facebook.com/med.otaku73/"}
          />
        </div>
        <div className="sm:col-span-2 col-span-6">
          <Contactcore
            img={"/images/assets/linkdin.png"}
            url={"https://www.linkedin.com/in/java-nta-8153832a5/"}
          />
        </div>
        <div className="sm:col-span-2 col-span-6">
          <Contactcore
            img={"/images/assets/instagram.png"}
            url={"https://www.instagram.com/medo.rox/"}
          />
        </div>
      </div>
    </Page>
  );
};

export default AboutMe;
