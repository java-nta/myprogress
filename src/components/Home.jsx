import { SiSpring, SiTailwindcss } from "react-icons/si";
import Cardcore from "./core/Cardcore";
import Page from "./layout/Page";

import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Page title={"Home"}>
      <p>This project was developed using the following Technology:</p>
      <div className="flex flex-wrap justify-center gap-5 my-5">
        <div className="w-full md:w-96">
          <NavLink to={"https://spring.io"} target="_blank">
            <Cardcore
              title={"Spring boot"}
              icon={<SiSpring />}
              body="
            Spring Boot is a powerful and popular framework for building Java-based applications. It's designed to simplify the process of creating stand-alone, production-grade Spring applications with a minimalistic and opinionated approach."
            />
          </NavLink>
        </div>
        <div className="w-full md:w-96">
          <NavLink to={"https://react.dev"} target="_blank">
            <Cardcore
              title={"Reactjs"}
              icon={<FaReact />}
              body="
            React.js is a powerful JavaScript library used for building user interfaces. It's known for its component-based architecture, which allows developers to create encapsulated, reusable UI elements"
            />
          </NavLink>
        </div>
        <div className="w-full md:w-96">
          <NavLink to={"https://tailwindcss.com"} target="_blank">
            <Cardcore
              title={"Tailwind css"}
              icon={<SiTailwindcss />}
              mainColor={"blue-600"}
              body="

Tailwind is a game-changer in web development. It simplifies styling by offering ready-to-use utility classes that streamline design customization directly within HTML. With its extensive range of classes for various style elements, Tailwind empowers developers to create sleek, responsive designs swiftly, without the need to write extensive CSS code."
            />
          </NavLink>
        </div>
      </div>
    </Page>
  );
};

export default Home;
