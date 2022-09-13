import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CardMedia from "@mui/material/CardMedia";
import CardAction from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

const YoutbeVideo = () => {
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
          <Typography variant="h8">Filter By:</Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
          <Typography variant="h8">Sort By:</Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
                <CardMedia
                  component="img"
                  height="140"
                  image={item.snippet.thumbnails.high.url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "" }}
                  >
                    {item.snippet.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="yt-line-clamp"
                  >
                    {item.snippet.description}
                  </Typography>
                </CardContent>
                <CardAction sx={{ marginTop: "auto", padding: " 1rem" }}>
                  <a
                    href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    target="__blank__"
                  >
                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="error"
                    >
                      Watch Now
                    </Button>
                  </a>
                </CardAction>
              </Card>
            );
          })}
      </Container>
    </>
  );
};

export default YoutbeVideo;
