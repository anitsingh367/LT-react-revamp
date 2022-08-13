// Import npm packages
import PropTypes from "prop-types";
import "./css/Events.scss";
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
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 2",
      description: "Description 2",
      status: "live",
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 3",
      description: "Description 3",
      status: "live",
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 4",
      description: "Description 4",
      status: "finished",
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.",
      status: "live",
    },
    {
      image: "https://living-teasure-revamp.netlify.app/assets/poster.jpeg",
      heading: "Heading 6dddddddd ssss",
      description: "Description 6",
      status: "live",
    },
  ],
};

export default function Events(props) {
  return (
    <div className="events-container">
    <h1>Events</h1>
      <div style={{color:"grey"}}>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </div>
      <div className="card-container">
        {props.content?.map((items, index) => {
          return (
            <div style={{ margin: 50 }} key={index}>
              <EventCard content={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
