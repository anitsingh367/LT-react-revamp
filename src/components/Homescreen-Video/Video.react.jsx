import React from "react";
import { Box } from "@mui/material";
import "./Video.scss";

const Video = () => {
  const src =
    "https://raw.githubusercontent.com/anitsingh367/LT-react-revamp/master/src/assets/LT%20website%20top%20Banner%20New.mp4";
  return (
    <Box
      sx={{
        height: { lg: "75vh", sm: "100%", xs: "100%" },
      }}
    >
      <video height="100%" width="100%" loop autoPlay muted className="video">
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </Box>
  );
};

export default Video;
