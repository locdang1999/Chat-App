import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  X,
  Phone,
  VideoCamera,
  CaretRight,
  Star,
  Bell,
  Prohibit,
  Trash,
} from "phosphor-react";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this Contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeletekDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this chat</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
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
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
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
          {/* Avatar and Info */}
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                +0999999999
              </Typography>
            </Stack>
          </Stack>
          {/* Icon function call */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          {/* About */}
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi there, I am using</Typography>
          </Stack>
          <Divider />
          {/* All Images, links and docs */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links and Docs</Typography>
            <Button
              endIcon={<CaretRight />}
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((item, idx) => (
              <Box key={idx}>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          {/* Start Msg */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          {/* Notifications */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          {/* Group common */}
          <Typography variant="">1 group in common</Typography>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">
                Owl, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button
              onClick={handleClickOpenBlock}
              fullWidth
              variant="outlined"
              startIcon={<Prohibit />}
            >
              Block
            </Button>
            <Button
              onClick={handleClickOpenDelete}
              fullWidth
              variant="outlined"
              startIcon={<Trash />}
            >
              Delete
            </Button>
          </Stack>
          {/* End */}
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeletekDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};

export default Contact;
