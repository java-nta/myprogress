import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};

export default Content;
