import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimonialData from "../data/testimonialData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          gutterBottom
        >
          WHAT <span style={{ color: "#388E3C" }}> PEOPLE </span> THINK ABOUT US
        </Typography>
      </Box>
      <div className="swiper-slider">
        <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              // width: 768,
              slidesPerView: 1,
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
              <div key={index}>
                <SwiperSlide className="swiperSlide">
                  <div className="testimonial-img">
                    <Avatar
                      alt="Remy Sharp"
                      src={item.imgSrc}
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                  <Typography
                    className="testimonial-description"
                    sx={{ fontWeight: "100" }}
                  >
                    {item.description}
                  </Typography>
                  <Divider />
                  <Typography className="testimonial-name">
                    {item.name}
                  </Typography>
                  <Typography className="testimonial-designation">
                    {item.designation}
                  </Typography>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
