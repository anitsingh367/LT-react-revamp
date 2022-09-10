import React, { useState } from "react";
import CustomCard from "../Card/Card.react";
import {
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Pagination,
} from "@mui/material";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
ProjectsBySection.propTypes = {
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
      type: "Accomplised",
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
      type: "Accomplised",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Heading 1",
      description: "Description 1",
      category: "Medical",
      type: "future",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Heading 2",
      description: "Description 2",
      status: "upcoming",
      category: "Education",
      type: "future",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Heading 3",
      description: "Description 3",
      status: "live",
      category: "Medical",
      type: "future",
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
  const [alignment, setAlignment] = React.useState("web");

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [age, setAge] = React.useState("");

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
  const changeCategory = (categoryType) => {
    const filteredData = props.content.filter((item) => {
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
            <ToggleButton onClick={() => filterData("All")} selected>
              All
            </ToggleButton>
            <ToggleButton onClick={() => filterData("Education")}>
              Education
            </ToggleButton>
            <ToggleButton onClick={() => filterData("Medical")}>
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
              <MenuItem onClick={() => changeCategory("All")}>All</MenuItem>
              <MenuItem onClick={() => changeCategory("Ongoing")}>
                Ongoning
              </MenuItem>
              <MenuItem onClick={() => changeCategory("Accomplised")}>
                Accomplised
              </MenuItem>
              <MenuItem onClick={() => changeCategory("future")}>
                Future
              </MenuItem>
            </Select>
          </Box>
        </Container>
        <Container
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {projectFilter?.map((items, index) => {
            return (
              <div key={index}>
                <CustomCard content={items} primaryBtnTxt="View Projects" />
              </div>
            );
          })}
        </Container>
        <Pagination count={10} shape="rounded" />
      </Container>
    </>
  );
}
