// Import npm packages
import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";
import LiveDot from "@mui/icons-material/FiberManualRecord";
import ShareIcon from "@mui/icons-material/Share";
Events.propTypes = {
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

Events.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "ANIT",
      description:
        "A New India Together fsdhfjsdhf sdkjfsdjkfhsdkj fhsdkjfhsdkjfhsdfkjsdhf ksjdfhsdkjfh sdkjfshdfkjsdfhkjsdhfksdjhfsd kjf fhdjshfksjd fhskdjfhskdjfh sdkjfhsdf kj sdfh",
      chipTemplate: {
        icon: LiveDot,
        chipText: "Live",
        textColor: "red",
      },
      secondaryBtns: [
        {
          icon: ShareIcon,
          btnText: "contribute",
          onClick: () => {
            console.log("contribute");
          },
        },
        {
          icon: ShareIcon,
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
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Heading 3",
      description: "Description 3",
    },
    {
      image: "",
      heading: "Heading 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
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
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Heading 3",
      description: "Description 3",
    },
    {
      image: "",
      heading: "Heading 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
  ],
};

export default function Events(props) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <span style={{ color: "var(--primary-color)" }}> events </span> at the
        living treasure
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            lg: "space-between",
            md: "space-evenly",
            sm: "space-evenly",
            xs: "space-evenly",
          },
          "&:after": {
            content: { lg: '""' },
            flex: { lg: "auto", md: "0", sm: "0", xs: "0" },
          },
        }}
      >
        {props.content
          ?.slice(0, 8)
          .filter((items) => {
            return items?.isProject ? items?.isProject === false : items;
          })
          .map((items, index) => {
            return (
            <Box
              sx={{
                height: "auto",
                width: "16rem",
                margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
              }}
              key={index}
            >
              <CustomCard content={items} />
            </Box>
          );
        })}
      </Container>
      {props.content && props.content?.length > 0 && (
        <Button variant="contained" color="primary" sx={{ margin: "1rem" }}>
          View All
        </Button>
      )}
    </section>
  );
}
