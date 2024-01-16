import React from "react";
import { Stack, Divider, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

export { Timeline, TextMsg, MediaMsg };
