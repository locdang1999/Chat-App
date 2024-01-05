import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayut = () => {
  return (
    <>
      <div>DashboardLayut</div>
      <Outlet />
    </>
  );
};

export default DashboardLayut;
