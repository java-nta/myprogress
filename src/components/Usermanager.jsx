import { FaCheck, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Page from "./layout/Page";
import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";

import Modalcore from "./core/Modalcore";

const Usermanager = () => {
  // SKELETON SECTION
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // MODEL SECTION
  const [modals, setModals] = useState({
    addModal: false,
    deleteModal: false,
  });
  const toggeleModal = (modalName) => {
    setModals((preModals) => ({
      ...preModals,
      [modalName]: !preModals[modalName],
    }));
  };

  // REQUESTS
  const addUserHandler = () => {
    alert("user.add");
  };
  return (
    <>
      {isLoading ? (
        <div
          role="status"
          className="h-[500px]  flex items-center justify-center"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {modals.addModal && (
            <div className="  fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 smooth-transition ">
              <Modalcore
                title={"Add new user"}
                close={() => toggeleModal("addModal")}
                actionButton={
                  <button
                    type="button"
                    onClick={addUserHandler}
                    className="flex items-center gap-1 border-2 border-transparent dark:hover:border-dark-background dark:hover:bg-dark-backgroundL p-2 hover: bg-dark-text dark:bg-transparent dark:text-dark-text text-white smooth-transition rounded-lg"
                  >
                    <FaPlus />
                    <span className="font-medium">Add user</span>
                  </button>
                }
              >
                <form action="">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col ">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:border-2 dark:bg-dark-backgroundL dark:border-dark-background dark:placeholder-gray-400 dark:text-white outline-none "
                        placeholder="Enter username"
                        required=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:border-2 dark:bg-dark-backgroundL dark:border-dark-background dark:placeholder-gray-400 dark:text-white outline-none "
                        placeholder="Enter email"
                        required=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:border-2 dark:bg-dark-backgroundL dark:border-dark-background dark:placeholder-gray-400 dark:text-white outline-none "
                        placeholder="enter password"
                        required=""
                      />
                      <p className="text-red-500 text-sm">
                        *password should be more than 8 caracters
                      </p>
                    </div>
                  </div>
                </form>
              </Modalcore>
            </div>
          )}
          {modals.deleteModal && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 smooth-transition ">
              <Modalcore
                title={"Delete user"}
                close={() => toggeleModal("deleteModal")}
                actionButton={
                  <button
                    type="button"
                    onClick={addUserHandler}
                    className="flex items-center border-2 border-transparent dark:hover:border-dark-background dark:hover:bg-dark-backgroundL p-2 hover: bg-dark-text dark:bg-transparent dark:text-red-700 text-white smooth-transition rounded-lg"
                  >
                    <FaTrash />
                    <span className="font-medium">Delete user</span>
                  </button>
                }
              >
                <form action="">
                  <div className="flex flex-col ">
                    <div className="flex flex-col">
                      <input
                        type="number"
                        name="id"
                        id="id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:border-2 dark:bg-dark-backgroundL dark:border-dark-background dark:placeholder-gray-400 dark:text-white outline-none "
                        placeholder="Enter user id"
                        required=""
                      />
                    </div>
                  </div>
                </form>
              </Modalcore>
            </div>
          )}
          <Page title={"User manager"}>
            <p className="border-2 rounded-md border-red-500 text-red-500 p-2 w-fit">
              No backend service
            </p>
            <p>You have the freedom to manage users.</p>
            <Toastcore
              icon={<FaCheck />}
              iconColor={"text-green-600"}
              message={"User added"}
            />
            {/* FILTER SECTION */}
            <div className="flex items-center flex-wrap lg:flex-nowrap p-3 lg:py-0 gap-2  w-full mt-12 justify-center dark:bg-dark-component rounded-md">
              <form className="flex items-center gap-2 w-full sm:w-2/3 ">
                <input
                  type="text"
                  placeholder="Search for a user"
                  className="w-full bg-transparent  rounded-full smooth-transition focus:outline-none py-1 px-5 hover:border-gray-400 border-2 dark:bg-dark-backgroundL dark:hover:border-dark-background dark:border-dark-background "
                />
                <button className="flex items-center">
                  <FaSearch className="hover:scale-110 smooth-transition  dark:text-dark-text" />
                </button>
              </form>
              <div className="flex items-center gap-1 my-3 text-nowrap">
                <button
                  type="button"
                  onClick={() => toggeleModal("addModal")}
                  className="flex items-center smooth-transition  border-2 py-1 px-3 rounded-xl hover:bg-gray-50 dark:bg-dark-component dark:border-transparent dark:hover:border-dark-background dark:hover:bg-dark-backgroundL  dark:text-dark-text"
                >
                  <MdAdd className="text-2xl" />
                  <span className="font-medium">Add user</span>
                </button>
                <button
                  type="button"
                  onClick={() => toggeleModal("deleteModal")}
                  className="flex items-center smooth-transition  border-2 py-1 px-3 rounded-xl hover:bg-gray-50 dark:bg-dark-component dark:border-transparent dark:hover:border-dark-background dark:hover:bg-dark-backgroundL  dark:text-dark-text"
                >
                  <FaTrash className="text-lg" />
                  <span className="font-medium">Delete user</span>
                </button>
              </div>
            </div>
            {/* USER TABLE */}
            <div className=" rounded-lg  p-1 my-3 text-[80%] dark:bg-dark-component">
              <table className="w-full text-center border-separate">
                <thead className="">
                  <tr className="bg-gray-50 dark:bg-dark-backgroundL dark:text-dark-text ">
                    <th>id</th>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="smooth-transition hover:scale-105 hover:bg-gray-50 dark:hover:bg-dark-scondary dark:hover:bg-dark-backgroundL dark:hover:text-dark-text">
                    <td>1</td>
                    <td>admin</td>
                    <td>********lps</td>
                    <td>admin@gmail.com</td>
                    <td>not for now</td>
                  </tr>
                  <tr className="smooth-transition hover:scale-105 hover:bg-gray-50 dark:hover:bg-dark-scondary dark:hover:bg-dark-backgroundL dark:hover:text-dark-text">
                    <td>1</td>
                    <td>admin</td>
                    <td>********lps</td>
                    <td>admin@gmail.com</td>
                    <td>not for now</td>
                  </tr>
                  <tr className="smooth-transition hover:scale-105 hover:bg-gray-50 dark:hover:bg-dark-scondary dark:hover:bg-dark-backgroundL dark:hover:text-dark-text">
                    <td>1</td>
                    <td>admin</td>
                    <td>********lps</td>
                    <td>admin@gmail.com</td>
                    <td>not for now</td>
                  </tr>
                  <tr className="smooth-transition hover:scale-105 hover:bg-gray-50 dark:hover:bg-dark-scondary dark:hover:bg-dark-backgroundL dark:hover:text-dark-text">
                    <td>1</td>
                    <td>admin</td>
                    <td>********lps</td>
                    <td>admin@gmail.com</td>
                    <td>not for now</td>
                  </tr>
                  <tr className="smooth-transition hover:scale-105 hover:bg-gray-50 dark:hover:bg-dark-scondary dark:hover:bg-dark-backgroundL dark:hover:text-dark-text">
                    <td>1</td>
                    <td>admin</td>
                    <td>********lps</td>
                    <td>admin@gmail.com</td>
                    <td>not for now</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Page>
        </>
      )}
    </>
  );
};

export default Usermanager;
