import React from "react";
import Events from "../components/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Events />
    </div>
  );
};

export default Home;
