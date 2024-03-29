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

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item, idx) => {
          switch (item.type) {
            case "divider":
              // Time line
              return <Timeline item={item} key={idx} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  // Img msg
                  return <MediaMsg item={item} key={idx} menu={menu} />;
                case "doc":
                  // Doc msg
                  return <DocMsg item={item} key={idx} menu={menu} />;
                case "link":
                  // Link
                  return <LinkMsg item={item} key={idx} menu={menu} />;
                case "reply":
                  // Reply msg
                  return <ReplyMsg item={item} key={idx} menu={menu} />;
                default:
                  // Text msg
                  return <TextMsg item={item} key={idx} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
