import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "./volunteers.scss";
import data from "../../data/imgDB";

const Volunteers = () => {
  return (
    <Container
      className="volunteer-parent"
      maxWidth={false}
      sx={{ textAlign: "center" }}
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
      <Swiper
        loop={true}
        slidesPerView={10}
        speed={1000}
        spaceBetween={30}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                PointerEvents: "none",
              }}
            >
              <img src={item.urls.thumb} alt={item.Name} />
              <Typography
                variant="caption"
                sx={{ margin: "5px", lineHeight: "24px", fontSize: "18px" }}
              >
                {item.user.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ margin: "5px", lineHeight: "24px", fontSize: "15.25px" }}
              >
                {item.user.username}
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Volunteers;
