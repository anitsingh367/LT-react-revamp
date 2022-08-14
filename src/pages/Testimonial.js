import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimonialData from "../data/testimonialData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontWeight: "200",
            fontSize: { lg: "3.5rem", md: "3rem", sm: "2.5rem", xs: "2rem" },
          }}
        >
          Testimonials
        </Typography>
        <Typography
          component="div"
          gutterBottom
          sx={{
            fontWeight: "200",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          architecto.
        </Typography>
      </Box>
      <div className="swiper-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialData.map((item, index) => {
            return (
              <div key={index}>
                <SwiperSlide className="swiperSlide">
                  <div className="testimonial-img">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                  <div className="testimonial-description">
                    {item.description}
                  </div>
                  <Divider />
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-designation">
                    {item.designation}
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
