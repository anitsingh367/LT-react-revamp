// Import npm packages
import { Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import CustomCard from "../Card/Card.react";

Projects.propTypes = {
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

Projects.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Acomplished Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Ongoing Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Future Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
    {
      image: "",
      heading: "Heading 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "finished",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Heading 1",
      description: "Description 1",
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
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "finished",
    },
  ],
};

export default function Projects(props) {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "var(--secondary-color-light)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: "2rem",
        }}
      >
        <span style={{ color: "var(--primary-color)" }}> Projects </span> at the
        living treasure
      </Typography>

      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {props.content
          ?.slice(0, 3)
          .filter((items) => {
            return items?.isProject ? items?.isProject === false : items;
          })
          .map((items, index) => {
            return (
              <div key={index}>
                <CustomCard content={items} />
              </div>
            );
          })}
      </Container>
    </Container>
  );
}
