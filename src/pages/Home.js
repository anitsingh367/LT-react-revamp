import React from "react";
import Events from "../components/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
