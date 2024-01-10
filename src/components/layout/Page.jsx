const Page = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[200%] font-bold dark:text-dark-text">{title}</h1>
      <div className="dark:text-gray-300">{children}</div>
    </div>
  );
};

export default Page;
