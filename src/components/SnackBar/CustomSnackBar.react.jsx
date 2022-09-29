import React from "react";
import { Card, Typography, Button, SvgIcon } from "@mui/material";

const CustomSnackBar = (props) => {
  const {
    onClose,
    message,
    closeMessage,
    icon,
    animation,
    iconColor,
    textColor,
    backgroundColor,
  } = props;

  return (
    <Card
      className={animation ? animation : ""}
      sx={{
        width: "15rem",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        // padding: 2,
        backgroundColor: backgroundColor
          ? backgroundColor
          : "var(--primary-color-light)",
      }}
    >
      {icon && (
        <SvgIcon
          component={icon}
          sx={{
            fontSize: 50,
            color: iconColor ? iconColor : "var(--primary-color)",
          }}
        />
      )}
      {message && (
        <Typography
          className={"snackbar-line-clamp"}
          variant="h6"
          sx={{
            textAlign: "center",
            color: textColor ? textColor : "var(--primary-color)",
            textTransform: "uppercase",
          }}
        >
          {message}
        </Typography>
      )}
      <Button
        variant="outlined"
        sx={{
          borderColor: textColor ? textColor : "var(--primary-color)",
          color: textColor ? textColor : "var(--primary-color)",
          "&:hover": {
            borderColor: textColor ? textColor : "var(--primary-color)",
          },
        }}
        onClick={() => {
          onClose(false);
        }}
      >
        {closeMessage ? closeMessage : "Close"}
      </Button>
    </Card>
  );
};

export default CustomSnackBar;
