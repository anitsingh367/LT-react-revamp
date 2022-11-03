import React from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  Container,
  LinearProgress,
  Button,
  ImageListItemBar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import data from "../../data/imgDB";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const ProjectViewPage = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: "3rem",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          {state.heading.toUpperCase()}
        </Typography>

        <Avatar
          alt="Remy Sharp"
          src={state.image}
          variant="square"
          sx={{
            width: 1,
            height: { lg: "60vh", md: "60vh", sm: "40vh", xs: "30vh" },
          }}
        />
      </Container>

      <Container
        sx={{
          marginTop: "2rem",
          padding: "1rem 0",
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Container sx={{ display: "flex", flex: 7 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
              Raised
            </Typography>
            <Typography>$632937</Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value={40}
            sx={{ height: "0.7rem", flex: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
              Goal
            </Typography>
            <Typography>$632937</Typography>
          </Box>
        </Container>

        <Button
          sx={{ marginLeft: "1rem", padding: "0.5rem 1.5rem", flex: 1 }}
          variant="contained"
        >
          Donate Now
        </Button>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ color: "gray", marginTop: "2rem" }}>
            APUN KE PUNTERS
          </Typography>
          <Container
            className="volunteer-parent"
            disableGutters
            maxWidth={false}
            sx={{
              textAlign: "center",
            }}
          >
            <Container
              disableGutters
              maxWidth="xl"
              //   className="swiper-container"
            >
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
                }}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
              >
                {data.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "13rem",
                        justifyContent: "space-between",
                        gap: 10,
                        backgroundColor: "#D4EFE8",
                      }}
                    >
                      <Avatar
                        src={item.urls.thumb}
                        variant="square"
                        sx={{ width: 100, height: 100, marginBottom: 1 }}
                      />
                      <Typography variant="body2" gutterBottom>
                        {item.user.name}
                      </Typography>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </Container>
        </Box>

        <Typography
          variant="body1"
          sx={{ lineHeight: "1.7rem" }}
          color="secondary"
        >
          {state.description}
        </Typography>
      </Container>
      <Container>
        <ImageList cols={3}>
          {itemData.slice(0, 6).map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              {index === 5 && (
                <ImageListItemBar
                  title={"View More"}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <AddIcon />
                    </IconButton>
                  }
                />
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Container>
  );
};

export default ProjectViewPage;
