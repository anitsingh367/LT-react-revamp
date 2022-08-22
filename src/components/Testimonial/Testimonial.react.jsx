import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimonialData from "../../data/testimonialData";
import Typography from "@mui/material/Typography";
import { Card, Container, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "var(--secondary-color-light)",
        textAlign: "center",
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
        WHAT <span style={{ color: "var(--primary-color)" }}> PEOPLE </span>
        THINK ABOUT US
      </Typography>
      <Container maxWidth="xl">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonialData.map((item, index) => {
            return (
              <Card key={index}>
                <SwiperSlide>
                  <Avatar
                    alt={item.name}
                    src={item.imgSrc}
                    sx={{ width: 100, height: 100, marginBottom: 1 }}
                  />
                  <Typography
                    paragraph
                    variant="body1"
                    sx={{ fontWeight: "lighter" }}
                  >
                    {item.description}
                  </Typography>
                  <Divider />
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.designation}
                  </Typography>
                </SwiperSlide>
              </Card>
            );
          })}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Testimonial;
