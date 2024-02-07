import { FaSearch } from "react-icons/fa";
import Page from "./layout/Page";
import ChatCard from "./core/chat/ChatCard";
import { IoMdSend } from "react-icons/io";
const Chat = () => {
  return (
    <Page title={"Chat app"}>
      <div className="flex gap-2">
        <div className="w-1/3 flex flex-col gap-2  dark:bg-dark-component overflow-y-auto max-h-[600px] px-2 py-5">
          {/* New chat button */}
          <div>
            <button
              type="button"
              className="p-1.5 bg-black text-white rounded-md dark:bg-white dark:text-black"
            >
              Find friend
            </button>
          </div>
          {/* Search */}
          <div>
            <form action="">
              <div className="flex items-center gap-4 border p-2 rounded-md focus-within:bg-gray-50 dark:focus-within:bg-dark-backgroundL dark:border-dark-background  dark:focus-within:border-dark-text dark:bg-dark-backgroundL">
                <span className="text-md">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="search..."
                  className="outline-none bg-transparent w-full"
                />
              </div>
            </form>
          </div>

          {/* Gap div message */}
          <div>
            <p className="text-xs dark:text-gray-300 font-light">
              RECENT CHATS
            </p>
          </div>
          {/* Messages Components */}
          <div className="flex flex-col gap-1">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        <div className="flex flex-col w-2/3 p-2 relative h-[600px]">
          {/* Chat windows top */}
          <div className="flex items-center border-b p-2 border-b-gray-100 dark:border-b-dark-component">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 ">
                <p className="text-white text-3xl font-bold">U</p>
              </div>
              <div className="flex flex-col">
                <p>Friend Name</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-xs">Online</p>
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
                    Praesentium velit sunt dolorum, illo facere obcaecati
                    corporis hic soluta incidunt impedit quis at asperiores
                    autem commodi. Quae sit totam molestias praesentium.
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
                  Praesentium velit sunt dolorum, illo facere obcaecati corporis
                  hic soluta incidunt impedit quis at asperiores autem commodi.
                  Quae sit totam molestias praesentium.
                </p>
              </div>
            </div>
          </div>
          {/* Chat input */}
          <div className="border-t absolute bottom-0 w-full bg-white dark:bg-dark-background border-gray-100 dark:border-dark-component">
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
        </div>
      </div>
    </Page>
  );
};

export default Chat;
