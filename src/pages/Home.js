import React from "react";
import Events from "../components/Events/Events.react";
import DrawerAppBar from "../components/Navbar/Navbar.react";
import Testimonial from "../components/Testimonial/Testimonial.react";
import Footer from "../components/Footer/Footer.react";
import Projects from "../components/Projects/Projects.react";
import Video from "../components/Homescreen-Video/Video.react";
import Volunteers from "../components/Volunteers/Volunteers.react";
import AnitCard from "./../components/Card/AnitCard.react";
import LiveDot from "@mui/icons-material/FiberManualRecord";
import ShareIcon from "@mui/icons-material/Share";

const items = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
  heading: "ANIT",
  description:
    "A New India Together fsdhfjsdhf sdkjfsdjkfhsdkj fhsdkjfhsdkjfhsdfkjsdhf ksjdfhsdkjfh sdkjfshdfkjsdfhkjsdhfksdjhfsd kjf fhdjshfksjd fhskdjfhskdjfh sdkjfhsdf kj sdfh",
  chipTemplate: {
    icon: LiveDot,
    chipText: "Live",
    textColor: "red !important",
  },
  secondaryBtns: [
    {
      btnText: "contribute",
      onClick: () => {
        console.log("contribute");
      },
    },
    {
      btnText: "share",
      onClick: () => {
        console.log("share");
      },
    },
  ],
  primaryBtn: {
    btnText: "Join Us",
    onClick: () => {
      console.log(typeof LiveDot);
    },
  },
  actionIcon: ShareIcon,
};
const Home = () => {
  return (
    <div>
      <AnitCard content={items} />
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
