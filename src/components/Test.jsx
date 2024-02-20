import { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";

var stompClient = null;
const Test = () => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws/chat");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    setChat((preChat)=>[...preChat,payloadData]);
  };
  const onConnected = () => {
    setConnected(true);
    stompClient.subscribe("/topic/public", onMessageReceived);
  };

  const onError = (err) => {
    console.log(err);
  };
  const sendMessage = () => {
    if (stompClient) {
      console.log("SEND MSSG");
      var chatMessage = {
        content: message,
        sender: "me",
      };
      stompClient.send("/app/public", {}, JSON.stringify(chatMessage));
    }
  };

  return (
    <div>
      <input
        type="text"
        className="p-2 bg-transparent border outline-none"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="button"
        className="p-2 border"
        disabled={!connected}
        onClick={sendMessage}
      >
        Send
      </button>
      <button
        type="button"
        className="p-2 border"
        disabled={connected}
        onClick={connect}
      >
        CONNECT
      </button>

      <div className="p-2 border w-full flex flex-col items-center">
        <h1>CHAT</h1>
        <div className="p-2 m-2">
          {chat.map((i) => (
            <p key={i}>{i.content }</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
