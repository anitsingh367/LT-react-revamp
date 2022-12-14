// Import npm packages
import { Typography, Container, ButtonBase } from "@mui/material";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

Projects.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
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
      heading: "Accomplished",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Ongoing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Future",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
    },
  ],
};

export default function Projects(props) {
  const navigate = useNavigate();

  const handleProjectCard = (status) => {
    navigate("/projects", {
      state: {
        status: status,
      },
    });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "var(--secondary-color-light)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: "2rem",
        }}>
        <span style={{ color: "var(--primary-color)" }}> Projects </span> at the
        living treasure
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {props.content?.map((items, index) => {
          return (
            <Box
              onClick={() => {
                handleProjectCard(items.heading);
              }}
              sx={{
                height: "auto",
                width: "16rem",
                margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                cursor: "pointer",
              }}
              key={index}>
              <ButtonBase sx={{ textAlign: "left" }}>
                <CustomCard
                  content={{
                    ...items,
                    hoverEffect: true,
                  }}
                />
              </ButtonBase>
            </Box>
          );
        })}
      </Container>
    </Container>
  );
}
