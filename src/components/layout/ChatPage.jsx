import { IoMdSend } from "react-icons/io";
import { classes } from "../../utils";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
const ChatPage = ({
  title,
  img,
  connected,
  status,
  stomp,
  subscribeTo,
  sendTo,
}) => {
  const { user } = useAuth();
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(user);
    if (stomp && connected) {
      console.log("SEND MSSG");
      var chatMessage = {
        content: message,
        sender: user.username,
      };
      stomp.send(sendTo, {}, JSON.stringify(chatMessage));
    }
  };
  useEffect(() => {
    var subscription = null;
    const onReceiveMessage = (data) => {
      var message = JSON.parse(data.body);
      setChat((preChat) => [...preChat, message]);
    };

    // Subscribe to the topic
    if (connected) {
      subscription = stomp.subscribe(subscribeTo, onReceiveMessage);
    }

    return () => {
      // Unsubscribe when the component unmounts
      if (connected) subscription.unsubscribe();
    };
  }, [stomp, subscribeTo, connected]);
  return (
    <>
      {/* Chat windows top */}
      <div className="flex sticky top-0 items-center bg-white dark:bg-dark-background border-b p-2 border-b-gray-100 dark:border-b-dark-component w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 ">
            <p className="text-white text-3xl font-bold">{title[0]}</p>
          </div>
          <div className="flex flex-col">
            <p>{title}</p>
            <div className="flex items-center gap-1">
              {status && (
                <span
                  className={classes(
                    "w-2 h-2 rounded-full",
                    status === "online" ? "bg-green-500" : "bg-red-500"
                  )}
                ></span>
              )}
              <p className="text-xs">{status}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Chat messages mid */}
      <div className="flex flex-col px-2 gap-1 py-2 flex-auto">
        {chat.map((message) => (
          <div
            className={classes(
              "flex gap-2 w-full",
              message.sender === user.username
                ? "flex-row-reverse pl-16"
                : "pr-16"
            )}
            key={message.id}
          >
            <div className="flex items-center justify-center w-8 h-8 border rounded-full bg-gray-300 ">
              <span className="text-white text-sm font-bold">
                {message.sender?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-1 p-1">
                <span className="text-xs">{message.sender}</span>
                <span className="text-xs">
                  {message.timeStamp?.substring(11, 16)}
                </span>
              </div>
              <div className="p-2 w-fit text-sm bg-gray-100 dark:bg-dark-component ">
                <p>{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Chat input */}
      <div className="border-t sticky w-full bottom-0 bg-white dark:bg-dark-background border-gray-100 dark:border-dark-component">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
            setMessage("");
          }}
        >
          <div className="flex items-center w-full gap-4 p-2">
            <input
              type="text"
              placeholder="Send message"
              className="outline-none w-full text-wrap bg-transparent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="flex items-center p-1 bg-teal-500 text-white rounded-md"
              disabled={!connected}
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
