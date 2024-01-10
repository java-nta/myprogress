import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthPage from "./layout/AuthPage";
import { useState } from "react";
import { classes } from "../utils";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <AuthPage title={"Login"} message={"Welcome back. enter your credentials"}>
      <form action="">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              class="text-[16px] font-medium bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-md  w-full p-2.5  "
              placeholder="Enter your username"
              required=""
            />
          </div>
          <div className="flex flex-col">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              class="text-[16px] font-medium bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-md  w-full p-2.5  "
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="flex flex-col">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type={type}
              name="password"
              id="password"
              class="text-[16px] font-medium bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-md  w-full p-2.5  "
              placeholder="Enter your password"
              required=""
            />
          </div>
          <div className="flex flex-col">
            <label
              for="confirmation"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirmation
            </label>
            <input
              type={type}
              name="confirmation"
              id="confirmation"
              class="text-[16px] font-medium bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-md  w-full p-2.5  "
              placeholder="Enter your confirmation"
              required=""
            />
            <div className="flex justify-end items-center mt-2">
              <button
                type="button"
                onClick={toggleShowPassword}
                className={classes(
                  "smooth-transition text-lg hover:scale-95 hover:bg-gray-200 p-1 rounded-lg",
                  showPassword ? "text-gray-900 rotate-180 " : "text-gray-400"
                )}
              >
                <FaEye />
              </button>
            </div>
          </div>
          <div className="flex flex-col my-3 gap-2">
            <button
              type="button"
              className="w-full smooth-transition bg-blue-500 text-white font-medium rounded-md py-2 hover:scale-95"
            >
              Sing Up
            </button>
            <NavLink to={process.env.PUBLIC_URL + "/login"}>
              <button
                type="button"
                className="w-full smooth-transition text-gray-800 border-2 border-gray-800 font-medium rounded-md py-1.5 hover:scale-95 hover:bg-gray-800 hover:text-white"
              >
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </AuthPage>
  );
};

export default SignUp;
