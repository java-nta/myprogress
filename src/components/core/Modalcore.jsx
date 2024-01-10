import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { classes } from "../../utils";

const Modalcore = ({ title, close, actionButton, children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 100);
  }, []);
  const closeModal = () => {
    setModalVisible(false); // Close the modal
    setTimeout(() => {
      close(); // Call the close function after the transition
    }, 300);
  };
  return (
    <div
      id="modal"
      className={classes(
        "flex smooth-transition flex-col border shadow-sm relative bg-white rounded-lg  dark:bg-dark-component dark:border-dark-background sm:w-1/3 ",
        modalVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-dark-background">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-dark-text">
          {title}
        </h3>
        <button
          type="button"
          onClick={closeModal}
          className="hover:bg-gray-300 border-2 dark:hover:bg-dark-backgroundL outline-none border-transparent dark:hover:border-dark-background p-2 smooth-transition rounded-lg"
        >
          <div className="rotate-45 font-light">
            <FaPlus />
          </div>
        </button>
      </div>
      <div className="p-4">{children}</div>
      <div className="flex border-t p-2 gap-2 justify-end dark:border-dark-background hover:text-black">
        <button
          type="button"
          onClick={closeModal}
          className="py-1 px-2 hover:bg-gray-300 smooth-transition rounded-lg border-2 border-transparent dark:hover:border-dark-background dark:hover:bg-dark-backgroundL dark:hover:text-white"
        >
          Cancel
        </button>
        {actionButton && actionButton}
      </div>
    </div>
  );
};

export default Modalcore;
