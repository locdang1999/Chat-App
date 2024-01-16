import React from "react";
import { Stack, Box } from "@mui/material";
import { ChatFooter, ChatHeader } from "../Chat";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"100%"}>
      {/* Chat Header */}
      <ChatHeader />
      {/* MSG */}
      <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }} className="stack-chats-scroll">
        <Message />
      </Box>
      {/* Chat Footer */}
      <ChatFooter />
    </Stack>
  );
};

export default Conversation;
