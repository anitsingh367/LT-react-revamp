import React from "react";
import Events from "../components/Events/Events.react";
import Testimonial from "../components/Testimonial/Testimonial.react";
import Projects from "../components/Projects/Projects.react";
import Video from "../components/Homescreen-Video/Video.react";
import Volunteers from "../components/Volunteers/Volunteers.react";

const Home = () => {
  return (
    <div>
      <Video />
      <Events />
      <Projects />
      <Testimonial />
      <Volunteers />
    </div>
  );
};

export default Home;
