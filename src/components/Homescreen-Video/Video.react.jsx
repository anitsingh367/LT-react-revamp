import React from "react";
import { Container } from "@mui/material";
import "./Video.scss";

const Video = () => {
  const src =
    "https://player.vimeo.com/external/513806634.sd.mp4?s=6004ea15276c0cbb903e54ade6ff6d7aef64dd73&profile_id=164&oauth2_token_id=57447761";
  return (
    <video loop autoPlay muted className="video">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
