import { FaSearch } from "react-icons/fa";
import Page from "./layout/Page";
import ChatCard from "./core/chat/ChatCard";
import { motion, AnimatePresence } from "framer-motion";
import ChatPage from "./layout/ChatPage";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient = null;
const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [connected, setConnected] = useState(false);
  const [userList, setUserList] = useState([
    { id: 1, title: "Free Palestine", status: "online" },
    { id: 2, title: "React js", status: "online" },
    { id: 3, title: "Spring boot", status: "offline" },
  ]);
  const publicChat = { title: "Public Chat", status: null };
  const onConnected = () => {
    setConnected(true);
  };

  const onError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    const connect = () => {
      let Sock = new SockJS("http://localhost:8080/ws/chat");
      stompClient = over(Sock);
      stompClient.connect({}, onConnected, onError);
    };
    connect();
  }, []);
  return (
    <Page title={"Chat app"}>
      <div className="flex gap-2 w-full h-full">
        {/* aside */}
        <div className="w-1/3 flex h-full flex-col gap-2  dark:bg-dark-component overflow-y-auto max-h-[600px] px-2 py-5">
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
            <p className="text-xs dark:text-gray-300 font-light">CHATROOMS</p>
          </div>
          <div className="flex flex-col gap-1">
            <ChatCard
              receiver={"Public Chat"}
              _onClick={() => {
                setSelectedChat(publicChat);
              }}
            />
          </div>
          {/* Gap div message */}
          <div>
            <p className="text-xs dark:text-gray-300 font-light">
              RECENT CHATS
            </p>
          </div>
          {/* Messages Components */}
          <div className="flex flex-col gap-1">
            {userList.map((user) => (
              <ChatCard
                key={user.id}
                receiver={user.title}
                status={user.status}
                _onClick={() => {
                  setSelectedChat(user);
                }}
              />
            ))}
          </div>
        </div>
        {/* main chat */}
        <div className="w-2/3 h-[600px]">
          <AnimatePresence>
            {selectedChat ? (
              <motion.div
                key="selectedChat"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full relative overflow-auto"
              >
                <ChatPage
                  title={selectedChat.title}
                  status={selectedChat.status}
                  sendTo={"/app/public"}
                  subscribeTo={"/topic/public"}
                  connected={connected}
                  stomp={stompClient}
                />
              </motion.div>
            ) : (
              <motion.div
                key="noSelectedChat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                }}
                className="text-gray-300 absolute"
              >
                <span>Select a chat to start a conversation</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Page>
  );
};

export default Chat;
