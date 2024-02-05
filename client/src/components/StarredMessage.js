import React from "react";
import { useDispatch } from "react-redux";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebarType } from "../redux/slices/app";

const StarredMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          className="stack-chats-scroll"
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "auto",
          }}
          p={3}
          spacing={3}
        >
          {/* Detail Tabs */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessage;
