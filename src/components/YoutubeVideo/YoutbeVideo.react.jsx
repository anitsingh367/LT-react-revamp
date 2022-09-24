import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";

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

  const [fetchVideo, setfetchVideo] = useState();
  const [Search, setSearch] = useState("");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "18458c0a04msh10c0a0f99cd0268p1acdbejsn9ebc33d70081",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const fetchVideo = async () => {
      const response = await fetch(
        "https://youtube-v31.p.rapidapi.com/search?channelId=UCCEo6AtbAMYTNb0dedyz54A&part=snippet%2Cid&order=date&maxResults=12",
        options
      );
      const data = await response.json();
      setfetchVideo(data.items);
    };
    fetchVideo();
  }, []);

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            gap: "1rem",
          }}
        >
          <Typography variant="subtitle1">Filter By:</Typography>
          {/* Language */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
            </Select>
          </FormControl>
          {/* Topics */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Topics
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={"Depression"}>Depression</MenuItem>
              <MenuItem value={"Peace"}>Peace</MenuItem>
              <MenuItem value={"Stress"}>Strees</MenuItem>
            </Select>
          </FormControl>
          {/* Content Type */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Content Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={"Video"}>Video</MenuItem>
              <MenuItem value={"Audio"}>Audio</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
            gap: "1rem",
          }}
        >
          <Typography variant="subtitle1">Sort By:</Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Newtest
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
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
    </>
  );
};

export default YoutbeVideo;
