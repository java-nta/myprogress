import { FaEye, FaSave } from "react-icons/fa";
import Page from "./layout/Page";
import { useState } from "react";
import { classes } from "../utils";
export const Profil = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <Page title={"Profil"}>
      <div className="flex items-center flex-wrap my-5">
        <div className="w-1/3">
          <img
            src={process.env.PUBLIC_URL + "/images/assets/kenma.jpg"}
            className="h-[250px] rounded-full object-cover"
            alt="profil_img"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-5xl">Welcome to your profil {"Simo"}</h1>
          <button className="bg-blue-100 smooth-transition p-1 text-sm rounded-md hover:scale-95 dark:text-dark-background">
            Edit picture
          </button>
        </div>
      </div>
      <div className="relative border rounded-md px-3 py-10 dark:border-gray-600 my-5">
        <p className="text-sm text-gray-300 dark:text-gray-600 absolute -top-[10px] bg-white dark:bg-dark-background">
          Update
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            name="profil"
            className="bg-transparent outline-none border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type="text"
            placeholder="email"
            name="profil"
            className="bg-transparent outline-none border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type={type}
            placeholder="old password"
            name="profil"
            className="bg-transparent outline-none border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type={type}
            placeholder="new password"
            name="profil"
            className="bg-transparent outline-none border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className={classes(
              "smooth-transition text-lg hover:scale-95 hover:bg-gray-200 p-1 rounded-lg w-fit self-end",
              showPassword
                ? "text-gray-900 rotate-180 dark:text-dark-text"
                : "text-gray-400"
            )}
          >
            <FaEye />
          </button>
          <button className="flex items-center gap-1 text-white bg-dark-text w-fit p-1 rounded-md self-end smooth-transition hover:scale-95">
            <span>
              <FaSave />
            </span>
            Save
          </button>
        </form>
      </div>

      <div className="flex bg-white border p-2"></div>
    </Page>
  );
};
