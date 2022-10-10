import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";
import CircularProgress from "@mui/material/CircularProgress";

const YoutbeVideo = () => {
  YoutbeVideo.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
        primaryBtn: PropTypes.shape({
          btnIcon: PropTypes.object,
          btnText: PropTypes.string,
          onClick: PropTypes.func,
        }),
      })
    ),
  };

  const rapidAPIKey = process.env.REACT_APP_X_RAPID_API_KEY;
  const rapidAPIHost = process.env.REACT_APP_X_RAPID_API_HOST;
  const youtubeAPI = process.env.REACT_APP_YOUTUBE_API;

  const [fetchVideo, setfetchVideo] = useState();
  const [Search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("");
  const [newtest, setNewtest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const handleChangeTopic = (event) => {
    setTopic(event.target.value);
  };
  const handleChangeContentType = (event) => {
    setContentType(event.target.value);
  };
  const handleChangeNewtest = (event) => {
    setNewtest(event.target.value);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidAPIKey,
        "X-RapidAPI-Host": rapidAPIHost,
      },
    };
    setIsLoading(true);
    const fetchVideo = async () => {
      const response = await fetch(youtubeAPI, options);
      const data = await response.json();
      setfetchVideo(data.items);
      setIsLoading(false);
    };
    fetchVideo();
  }, [rapidAPIKey, rapidAPIHost, youtubeAPI]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          },
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: {
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="subtitle1" sx={{ mt: "10px" }}>
            Filter By:
          </Typography>
          {/* Language */}
          <FormControl
            variant="standard"
            sx={{
              minWidth: 120,
              width: { lg: "120px", sm: "100%", xs: "100%" },
            }}
          >
            <Select
              value={language}
              onChange={handleChangeLanguage}
              defaultValue="Language"
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
            </Select>
          </FormControl>
          {/* Topics */}
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: { lg: "120px", sm: "100%", xs: "100%" },
            }}
          >
            <Select
              value={topic}
              onChange={handleChangeTopic}
              placeholder="Topics"
            >
              <MenuItem value={"Depression"}>Depression</MenuItem>
              <MenuItem value={"Peace"}>Peace</MenuItem>
              <MenuItem value={"Stress"}>Strees</MenuItem>
            </Select>
          </FormControl>
          {/* Content Type */}
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: { lg: "120px", sm: "100%", xs: "100%" },
            }}
          >
            <Select
              value={contentType}
              onChange={handleChangeContentType}
              placeholder="Content Type"
            >
              <MenuItem value={"Video"}>Video</MenuItem>
              <MenuItem value={"Audio"}>Audio</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
            mt: { lg: "0px", md: "1rem", sm: "1rem", xs: "1rem" },
          }}
        >
          <Typography variant="subtitle1" sx={{ mt: "10px" }}>
            Sort By:
          </Typography>
          <FormControl
            variant="standard"
            sx={{
              minWidth: 120,
              width: { lg: "120px", sm: "100%", xs: "100%" },
            }}
          >
            <Select
              placeholder="Newtest"
              value={newtest}
              onChange={handleChangeNewtest}
            >
              <MenuItem value={"Newtest"}>Newtest</MenuItem>
              <MenuItem value={"Oldest"}>Oldest</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="input-with-sx"
            placeholder="Search"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { lg: "120px", sm: "100%", xs: "100%" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
      {!isLoading && (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          {fetchVideo
            ?.filter((filterItem) => {
              return Search.toLowerCase() === ""
                ? filterItem
                : filterItem.snippet.title
                    .toLowerCase()
                    .includes(Search.toLowerCase());
            })
            ?.map((item, index) => {
              return (
                <Card
                  raised
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "16rem",
                    height: "23rem",
                    margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                  }}
                  key={index}
                >
                  <CustomCard
                    content={{
                      ...item,
                      heading: item.snippet.title,
                      description: item.snippet.description,
                      image: item.snippet.thumbnails.high.url,
                      primaryBtn: {
                        btnText: "Watch Now",
                        onClick: () => {
                          window.open(
                            `https://www.youtube.com/watch?v=${item.id.videoId}`
                          );
                        },
                      },
                    }}
                  />
                </Card>
              );
            })}
        </Container>
      )}
      {isLoading && (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "90vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Container>
      )}
    </>
  );
};

export default YoutbeVideo;