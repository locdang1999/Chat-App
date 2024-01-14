import { alpha } from "@mui/material/styles";

const CssBaseline = () => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ".stack-chats-scroll": {
          "&:hover": {
            overflow: "auto",
          },
          "&::-webkit-scrollbar": {
            width: 10,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: alpha("#637381", 0.48),
          },
        },
      },
    },
  };
};

export default CssBaseline;
