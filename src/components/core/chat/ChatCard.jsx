import { classes } from "../../../utils";

const ChatCard = ({ receiver, status, _onClick }) => {
  return (
    <div
      onClick={_onClick}
      className="flex relative items-center gap-4 border rounded-md p-3 dark:bg-dark-backgroundL dark:border-dark-background hover:border-dark-text hover:cursor-pointer"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 ">
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
      <div className="absolute text-[9px]  p-1 rounded-md text-xs text-dark-background dark:text-white  right-2 top-2">
        <span>15:17 pm</span>
      </div>
    </div>
  );
};

export default ChatCard;
