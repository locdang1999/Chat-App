import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { CircleDashed, MagnifyingGlass, ArchiveBox } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/ScrollBar";

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, img, name, msg, time, unread, online }) => {
  const theme = useTheme();

  return (
    <StyledChatBox
      sx={{
        width: "100%",
        // height: 60,
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {/* col 1 */}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          {/* col 2 */}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        {/* col 3 */}
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge
            color="primary"
            badgeContent={unread}
            className="unread-count"
          />
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chats = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton sx={{ width: "max-content" }}>
            <CircleDashed />
          </IconButton>
        </Stack>
        {/* Search */}
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        {/* Archive */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button variant="text">Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        {/* Pinned */}
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "auto", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            {/* Pinned Chats */}
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el, idx) => (
                <ChatElement {...el} key={idx} />
              ))}
            </Stack>
            {/* All Chats */}
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el, idx) => (
                <ChatElement {...el} key={idx} />
              ))}
            </Stack>
          </SimpleBarStyle>
        </Stack>
        {/*  */}
      </Stack>
    </Box>
  );
};

export default Chats;
