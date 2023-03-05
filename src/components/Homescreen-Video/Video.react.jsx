import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./Video.scss";
import { getHomePageVideo } from "../../firebase";

const Video = () => {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    getHomePageVideo().then((res) => {
      setVideo(res[0].videoUrl);
    });
  }, []);

  return (
    <Box
      height={{ lg: "80vh", sm: "100%", xs: "100%" }}
      px={{ lg: 10, sm: 0, xs: 0 }}
      bgcolor="black">
      {video && (
        <video width="100%" height="100%" loop autoPlay muted className="video">
          <source src={video} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
    </Box>
  );
};

export default Video;
