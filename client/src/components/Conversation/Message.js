import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              // Time line
              return <Timeline item={item} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  // Img msg
                  return <MediaMsg item={item} />;
                case "doc":
                  // Doc msg
                  return <DocMsg item={item} />;
                case "link":
                  // Link
                  return <LinkMsg item={item} />;
                case "reply":
                  // Reply msg
                  return <ReplyMsg item={item} />;
                default:
                  // Text msg
                  return <TextMsg item={item} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
