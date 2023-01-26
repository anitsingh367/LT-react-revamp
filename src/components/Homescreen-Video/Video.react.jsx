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

  // const src =
  //   "https://player.vimeo.com/external/513806634.sd.mp4?s=6004ea15276c0cbb903e54ade6ff6d7aef64dd73&profile_id=164&oauth2_token_id=57447761";
  return (
    <Box
      sx={{
        height: { lg: "60vh", sm: "100%", xs: "100%" },
      }}
    >
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/g-rgYMJBH6A?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

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
