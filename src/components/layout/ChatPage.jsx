import { IoMdSend } from "react-icons/io";
import { classes } from "../../utils";
const ChatPage = ({ receiver, img, status, discussion }) => {
  return (
    <>
      {/* Chat windows top */}
      <div className="flex items-center border-b p-2 border-b-gray-100 dark:border-b-dark-component">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 ">
            <p className="text-white text-3xl font-bold">U</p>
          </div>
          <div className="flex flex-col">
            <p>{receiver}</p>
            <div className="flex items-center gap-1">
              <span
                className={classes(
                  "w-2 h-2 rounded-full",
                  status === "online" ? "bg-green-500" : "bg-red-500"
                )}
              ></span>
              <p className="text-xs">{status}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Chat messages mid */}
      <div className="flex flex-col py-5 overflow-y-auto">
        <div className="flex w-11/12 gap-2 my-7">
          <div className="flex items-center justify-center w-8 h-8 border rounded-full bg-gray-300 ">
            <span className="text-white text-sm font-bold">U</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-1 p-1">
              <span className="text-xs">Friend name</span>
              <span className="text-xs">11:00am</span>
            </div>
            <div className="p-2 text-wrap text-sm bg-gray-100 dark:bg-dark-component ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium velit sunt dolorum, illo facere obcaecati corporis
                hic soluta incidunt impedit quis at asperiores autem commodi.
                Quae sit totam molestias praesentium.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-end my-7">
          <div className="flex items-center gap-1 p-1">
            <span className="text-xs">You</span>
            <span className="text-xs">11:00am</span>
          </div>
          <div className="p-2 text-wrap text-sm bg-gray-100 dark:bg-dark-component w-11/12 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium velit sunt dolorum, illo facere obcaecati corporis hic
              soluta incidunt impedit quis at asperiores autem commodi. Quae sit
              totam molestias praesentium.
            </p>
          </div>
        </div>
      </div>
      {/* Chat input */}
      <div className="border-t w-full absolute bottom-0 bg-white dark:bg-dark-background border-gray-100 dark:border-dark-component">
        <form action="">
          <div className="flex items-center w-full gap-4 p-2">
            <input
              type="text"
              placeholder="Send message"
              className="outline-none w-full text-wrap bg-transparent"
            />
            <button
              type="button"
              className="flex items-center p-1 bg-teal-500 text-white rounded-md"
            >
              <span>Send</span>
              <span>
                <IoMdSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatPage;
