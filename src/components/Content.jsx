import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="w-full ">
      <Outlet />
    </div>
  );
};

export default Content;