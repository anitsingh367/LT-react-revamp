import React from "react";
import { Alert, Snackbar } from "@mui/material";

const CustomSnackBar = (props) => {
  const {
    autoHideDuration,
    anchorOrigin,
    TransitionComponent,
    open,
    onClose,
    message,
    severity
  } = props;

  return (
    <Snackbar
      sx={{ height: "100%" }}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      TransitionComponent={TransitionComponent}
      open={open}
      onClose={onClose}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackBar;
