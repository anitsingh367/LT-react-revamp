import React from "react";
import Events from "../components/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar";
import Testimonial from "./Testimonial";

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
