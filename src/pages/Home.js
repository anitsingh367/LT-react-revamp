import React from "react";
import Events from "../components/Events/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar.react";
import Testimonial from "../components/Testimonial/Testimonial.react";
import Footer from "../components/Footer/Footer.react";
import Projects from "../components/Projects/Projects.react";
import Video from "../components/Homescreen-Video/Video.react";
import Volunteers from "../components/Volunteers/Volunteers.react";
import ProjectPageTest from "../components/Projects/ProjectPageTest.react";

const Home = () => {
  return (
    <div>
      <ProjectPageTest />
      <DrawerAppBar />
      <Video />
      <Events />
      <Projects />
      <Testimonial />
      <Volunteers />
      <Footer />
    </div>
  );
};

export default Home;
