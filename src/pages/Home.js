import React from "react";
import Events from "../components/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar";
import ContributeModal from "../components/Modal/ContributeModal.react"

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Events />
      <ContributeModal/>
    </div>
  );
};

export default Home;
