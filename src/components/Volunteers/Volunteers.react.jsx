import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Container, Typography, Avatar } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "./volunteers.scss";
import data from "../../data/imgDB";

const Volunteers = () => {
  return (
    <Container
      className="volunteer-parent"
      maxWidth={false}
      sx={{
        textAlign: "center",
        backgroundColor: "var(--secondary-color-light)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingTop: "2rem",
        }}
        gutterBottom
      >
        OUR <span style={{ color: "var(--primary-color)" }}> Volunteers </span>
      </Typography>
      <Container disableGutters maxWidth="xl" className="swiper-container">
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
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  src={item.urls.thumb}
                  sx={{ width: 100, height: 100, marginBottom: 1 }}
                />
                <Typography variant="body2" gutterBottom>
                  {item.user.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase" }}
                >
                  {item.user.username}
                </Typography>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Volunteers;
