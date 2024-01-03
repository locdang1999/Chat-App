import React from "react";

const Typography = (theme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        article: {
          fontWeight: 700,
        },
      },
    },
  };
};

export default Typography;
