import React from "react";

const Breadcrumbs = (theme) => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
};

export default Breadcrumbs;
