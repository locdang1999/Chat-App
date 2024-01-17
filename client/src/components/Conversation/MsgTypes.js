import React from "react";
import {
  Stack,
  Divider,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Image, DownloadSimple } from "phosphor-react";

const DocMsg = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5, // 1.5 * 8 => 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: item.incoming ? theme.palette.text : "#FFF" }}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const LinkMsg = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5, // 1.5 * 8 => 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"start"}
            direction={"column"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={item.preview}
              alt={item.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Create Chat App</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.main }}
                component={Link}
                to="//https://www.youtobe.com"
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: item.incoming ? theme.palette.text : "#FFF" }}
            >
              {item.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const ReplyMsg = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5, // 1.5 * 8 => 12px
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: theme.palette.text }}>
              {item.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: item.incoming ? theme.palette.text : "#FFF" }}
          >
            {item.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5, // 1.5 * 8 => 12px
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={item.img}
            alt={item.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            sx={{ color: item.incoming ? theme.palette.text : "#FFF" }}
          >
            {item.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const TextMsg = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5, // 1.5 * 8 => 12px
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: item.incoming ? theme.palette.text : "#FFF" }}
        >
          {item.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const Timeline = ({ item }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {item.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
