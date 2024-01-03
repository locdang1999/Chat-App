import React from "react";

const Stepper = (theme) => {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
};

export default Stepper;
