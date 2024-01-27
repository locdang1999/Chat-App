import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      {/* Conversation */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)", // 420px
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      {/* Contact Information */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
