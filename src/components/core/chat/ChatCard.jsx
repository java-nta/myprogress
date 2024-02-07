const ChatCard = () => {
  return (
    <div className="flex relative items-center gap-4 border rounded-md p-3 dark:bg-dark-backgroundL dark:border-dark-background hover:border-dark-text hover:cursor-pointer">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 ">
        <p className="text-white text-3xl font-bold">U</p>
      </div>
      <div className="flex flex-col">
        <p>Friend Name</p>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p className="text-xs">Online</p>
        </div>
      </div>
      <div className="absolute flex p-1 bg-gray-100 dark:bg-dark-component rounded-md text-xs text-dark-background dark:text-white  right-2 top-2">
        <span>15:17 pm</span>
      </div>
    </div>
  );
};

export default ChatCard;
