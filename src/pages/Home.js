import React from "react";
import Events from "../components/Events/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar.react";
import Testimonial from "../components/Testimonial/Testimonial.react";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Events />
      <Testimonial />
    </div>
  );
};

export default Home;
