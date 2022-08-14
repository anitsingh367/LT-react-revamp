// Import npm packages
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard.react";

Events.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      status: PropTypes.oneOf(["none", "upcoming", "live", "finished"]),
      description: PropTypes.string,
    })
  ),
};

Events.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 1",
      description: "Description 1",
      status: "none",
      isProject: true,
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 2",
      description: "Description 2",
      status: "upcoming",
      isProject: true,
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 3",
      description: "Description 3",
      status: "live",
      isProject: true,
    },
    {
      image: "",
      heading: "Heading 4",
      description: "Description 4",
      status: "finished",
      isProject: false,
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.",
      status: "upcoming",
      isProject: false,
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading with extra content",
      description: "Description 6",
      status: "live",
      isProject: false,
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 6",
      description: "Description 6",
      status: "live",
      isProject: false,
    },
  ],
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function Events(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Helvetica",
          fontstyle: "normal",
          fontWeight: 700,
          fontSize: "2em",
          textAlign: "center",
          lineHeight: "46px",
          textTransform: "uppercase",
        }}
      >
        Upcoming events at the living treasure
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {props.content?.map((items, index) => {
          return (
            <div
              style={{
                margin:
                  windowSize.innerWidth < windowSize.innerHeight ? 15 : 50,
              }}
              key={index}
            >
              <EventCard content={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
