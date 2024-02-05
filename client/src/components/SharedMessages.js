import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);

  const handleChangeTab = (e, newVal) => {
    setTab(newVal);
  };

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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        {/* Tabs */}
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={tab}
          onChange={handleChangeTab}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
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
          padding={tab === 1 ? 1 : 3}
        >
          {/* Detail Tabs */}
          {(() => {
            switch (tab) {
              case 0: // Image
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((itm, idx) => {
                      return (
                        <Grid item xs={4} key={idx}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1: // Links
                return Shared_links.map((itm, idx) => {
                  return <LinkMsg key={idx} item={itm} />;
                });
              case 2: // Docs
                return Shared_docs.map((itm, idx) => {
                  return <DocMsg key={idx} item={itm} />;
                });

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
