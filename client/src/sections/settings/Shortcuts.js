import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { listShortCuts } from "../../data";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        sx={{ p: 4 }}
        TransitionComponent={Transition}
      >
        <DialogTitle>Keyboard Shortcut</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {listShortCuts.map(({ key, title, combination }) => (
              <Grid container item xs={6} key={key}>
                <Stack
                  sx={{ width: "100%" }}
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={3}
                  alignItems={"center"}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((itm, idx) => {
                      return (
                        <Button
                          key={idx}
                          disabled
                          variant="contained"
                          sx={{ color: "#212121" }}
                        >
                          {itm}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
