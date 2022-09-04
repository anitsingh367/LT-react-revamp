import React from "react";
import Events from "../components/Events/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar.react";
import Testimonial from "../components/Testimonial/Testimonial.react";
import Footer from "../components/Footer/Footer.react";
import Projects from "../components/Projects/Projects.react";
import Video from "../components/Homescreen-Video/Video.react";
import Volunteers from "../components/Volunteers/Volunteers.react";

const Home = () => {
  return (
    <div>
      <Video />
      <DrawerAppBar />
      <Events />
      <Projects />
      <Testimonial />
      <Volunteers />
      <Footer />
    </div>
  );
};

export default Home;
