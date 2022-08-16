// Import npm packages
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import EventCard from "./Card/EventCard.react";

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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Heading 1",
      description: "Description 1",
      status: "none",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Heading 2",
      description: "Description 2",
      status: "upcoming",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Heading 3",
      description: "Description 3",
      status: "live",
    },
    {
      image: "",
      heading: "Heading 4",
      description: "Description 4",
      status: "finished",
    },
    {
      image:
        "https://st2.depositphotos.com/2288675/5430/i/450/depositphotos_54306899-stock-photo-balance-and-harmony-in-nature.jpg",
      heading: "Heading 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.",
      status: "upcoming",
    },
    {
      heading: "Heading with extra content",
      description: "Description 6",
      status: "live",
      isProject: true,
    },
  ],
};

export default function Events(props) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: "2.5rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        Upcoming <span style={{ color: "#388E3C" }}> events </span> at the
        living treasure
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {props.content?.slice(0, 6).map((items, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexBasis: "25%",
                margin: 15,
              }}
              key={index}
            >
              <EventCard content={items} />
            </div>
          );
        })}
      </div>
      <Button variant="contained" color="primary" sx={{ margin: "1rem" }}>
        View All
      </Button>
    </section>
  );
}
