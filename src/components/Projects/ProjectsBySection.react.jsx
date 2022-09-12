import React, { useState } from "react";
import CustomCard from "../Card/CustomCard.react";
import {
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Pagination,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ShareIcon from "@mui/icons-material/Share";
ProjectsBySection.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string,
      chipTemplate: PropTypes.shape({
        icon: PropTypes.object,
        chipText: PropTypes.string,
        textColor: PropTypes.string,
      }),
      secondaryBtns: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.object,
          btnText: PropTypes.string,
          onClick: PropTypes.func,
        })
      ),
      primaryBtn: PropTypes.shape({
        btnIcon: PropTypes.object,
        btnText: PropTypes.string,
        onClick: PropTypes.func,
      }),
      actionIcon: PropTypes.object,
    })
  ),
};

ProjectsBySection.defaultProps = {
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
      category: "Education",
      type: "Ongoing",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Ongoing Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
      category: "Education",
      type: "Ongoing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Future Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
      category: "Medical",
      type: "ongoing",
    },
    {
      image: "",
      heading: "Heading 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "finished",
      category: "Medical",
      type: "Accomplished",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Heading 1",
      description: "Description 1",
      category: "Medical",
      type: "Future",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Heading 2",
      description: "Description 2",
      status: "upcoming",
      category: "Education",
      type: "Future",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Heading 3",
      description: "Description 3",
      status: "live",
      category: "Medical",
      type: "Future",
    },
    {
      image: "",
      heading: "Heading 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "finished",
      category: "Education",
      type: "Ongoing",
    },
  ],
};
export default function ProjectsBySection(props) {
  const [alignment, setAlignment] = useState("All");

  const handleChangeToggle = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const [age, setAge] = useState("All");

  const handleChangeFilter = (event) => {
    setAge(event.target.value);
  };
  const [projectFilter, setProjectFilter] = useState(props.content);
  const filterData = (categoryType) => {
    const filteredData = props.content.filter((item) => {
      return categoryType === "All" ? item : item.category === categoryType;
    });
    setProjectFilter(filteredData);
  };
  console.log("projectFilter", projectFilter);
  const changeCategory = (categoryType) => {
    const filteredData = projectFilter.filter((item) => {
      return categoryType === "All" ? item : item.type === categoryType;
    });
    setProjectFilter(filteredData);
  };
  return (
    <>
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
          <span style={{ color: "var(--primary-color)" }}> Projects </span> at
          the living treasure
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <ToggleButtonGroup
            aria-label="text button group"
            size="large"
            color="primary"
            exclusive
            value={alignment}
            onChange={handleChangeToggle}
          >
            <ToggleButton onClick={() => filterData("All")} value="All">
              All
            </ToggleButton>
            <ToggleButton
              onClick={() => filterData("Education")}
              value="Education"
            >
              Education
            </ToggleButton>
            <ToggleButton onClick={() => filterData("Medical")} value="Medical">
              Medical
            </ToggleButton>
          </ToggleButtonGroup>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
            }}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChangeFilter}
            >
              <MenuItem onClick={() => changeCategory("All")} value="All">
                All
              </MenuItem>
              <MenuItem
                onClick={() => changeCategory("Ongoing")}
                value="Ongoing"
              >
                Ongoning
              </MenuItem>
              <MenuItem
                onClick={() => changeCategory("Accomplished")}
                value="Accomplished"
              >
                Accomplished
              </MenuItem>
              <MenuItem onClick={() => changeCategory("Future")} value="Future">
                Future
              </MenuItem>
            </Select>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {projectFilter?.map((items, index) => {
            return (
              <Box
                sx={{
                  height: "auto",
                  width: "18.5rem",
                  margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                }}
                key={index}
              >
                <CustomCard
                  content={{
                    image: items.image,
                    heading: items.heading,
                    description: items.description,
                    chipTemplate: { chipText: items.category },
                    primaryBtn: {
                      btnText: "View Details",
                    },
                    actionIcon: ShareIcon,
                    secondaryBtns: [
                      { btnText: "Contribute" },
                      {
                        btnText: "Volunteer",
                      },
                    ],
                  }}
                />
              </Box>
            );
          })}
        </Container>
        <Pagination count={10} shape="rounded" />
      </Container>
    </>
  );
}
