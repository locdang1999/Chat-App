import React from "react";

const Paper = (theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: { borderColor: theme.palette.grey[500_12] },
        },
      ],
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
};

export default Paper;
