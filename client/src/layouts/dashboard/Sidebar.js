import React, { useState } from "react";
import {
  Box,
  Stack,
  IconButton,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Nav_Buttons, Profile_Menu } from "../../data";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "./../../hooks/useSettings";

const Sidebar = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction={"column"}
        sx={{ height: "100%" }}
        alignItems={"center"}
        spacing={3}
        justifyContent={"space-between"}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="logo" />
          </Box>
          {/* Icon Contact */}
          <Stack
            sx={{ width: "max-content" }}
            spacing={3}
            direction={"column"}
            alignItems={"center"}
          >
            {Nav_Buttons.map((val) => {
              return val.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={val.index}
                >
                  <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                    {val.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000000"
                        : theme.palette.text.primary,
                  }}
                  key={val.index}
                  onClick={() => setSelected(val.index)}
                >
                  {val.icon}
                </IconButton>
              );
            })}
            <Divider sx={{ width: "48px" }} />
            {/* Icon Settings */}
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        {/* Avatar */}
        <Stack spacing={4}>
          <AntSwitch onChange={() => onToggleMode()} defaultChecked />
          <Avatar
            src={faker.image.avatar()}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((item, idx) => (
                <MenuItem onClick={handleClose} key={idx}>
                  <Stack
                    sx={{ width: 100 }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{item.title}</span>
                    {item.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
