import React, { useState, useEffect } from "react";
import { Container, InputLabel, Pagination } from "@mui/material";
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
  const [fetchVideo, setfetchVideo] = useState(null);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const handleChangeTopic = (event) => {
    setTopic(event.target.value);
  };
  const handleChangeNewtest = (event) => {
    setTime(event.target.value);
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
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "var(--secondary-color-light)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: "2rem",
        }}>
        <span style={{ color: "var(--primary-color)" }}> Videos </span> at the
        living treasure
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: {
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            gap: {
              lg: 1,
              md: 0,
            },
            alignItems: {
              lg: "flex-end",
              md: "center",
            },
          }}>
          <Typography variant="overline">Filter By:</Typography>
          {/* Language */}
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="language">Language</InputLabel>
            <Select
              value={language}
              onChange={handleChangeLanguage}
              id="language"
              label="Language">
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
            </Select>
          </FormControl>
          {/* Topics */}
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="topics">Topics</InputLabel>
            <Select value={topic} onChange={handleChangeTopic} id="topics">
              <MenuItem value={"Depression"}>Depression</MenuItem>
              <MenuItem value={"Peace"}>Peace</MenuItem>
              <MenuItem value={"Stress"}>Strees</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
            gap: 1,
            alignItems: {
              lg: "flex-end",
              md: "center",
            },
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              gap: {
                lg: 1,
                md: 0,
              },
              alignItems: {
                lg: "flex-end",
                md: "center",
              },
            }}>
            <Typography variant="overline">Sort By:</Typography>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="time">Time</InputLabel>
              <Select value={time} onChange={handleChangeNewtest} id="time">
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <TextField
              placeholder="Search"
              variant="standard"
              onChange={(e) => setSearch(e.target.value)}
              sx={{ minWidth: 120 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
      </Container>
      {!isLoading && (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}>
          {fetchVideo
            ?.filter((filterItem) => {
              return search.toLowerCase() === ""
                ? filterItem
                : filterItem.snippet.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            ?.map((item, index) => {
              return (
                <Box
                  sx={{
                    height: "auto",
                    width: "18.5rem",
                    margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                  }}
                  key={index}>
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
                </Box>
              );
            })}
          <Pagination count={10} shape="rounded" />
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
          }}>
          <CircularProgress color="inherit" />
        </Container>
      )}
    </Container>
  );
};

export default YoutbeVideo;
