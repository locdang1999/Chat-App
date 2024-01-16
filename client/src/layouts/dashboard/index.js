import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";

const DashboardLayut = () => {
  return (
    <>
      <Stack direction={"row"}>
        {/* SideBar */}
        <Sidebar />
        <Outlet /> {/* Đai diện cho các components con trong useRouter*/}
      </Stack>
    </>
  );
};

export default DashboardLayut;
