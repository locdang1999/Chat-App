import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Container>
        <div>Main Layout</div>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
