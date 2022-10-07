import React, { useState, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import { ProjectContent } from "../../data/SampleData";

ProjectsPage.propTypes = {
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

ProjectsPage.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: ProjectContent,
};
export default function ProjectsPage(props) {
  const location = useLocation();
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState(
    location?.state?.status ? location?.state?.status : "All"
  );

  //Handle Category filter
  const handleChangeToggle = (event) => {
    if (event.target.value !== null) {
      setCategory(event.target.value);
    }
  };

  //Handle Status filter
  const handleChangeFilter = (event) => {
    setStatus(event.target.value);
  };

  const [projectFilter, setProjectFilter] = useState(props.content);

  useEffect(() => {
    const filteredData = props.content.filter((item) => {
      let itemCategory = item.category;
      let itemStatus = item.status;
      return category === "All" && status === "All"
        ? item
        : category === "All" && status !== "All"
        ? itemStatus === status
        : category !== "All" && status === "All"
        ? itemCategory === category
        : itemCategory === category && itemStatus === status;
    });
    setProjectFilter(filteredData);
  }, [category, status, props.content]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
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
            value={category}
            onChange={handleChangeToggle}
          >
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Education">Education</ToggleButton>
            <ToggleButton value="Medical">Medical</ToggleButton>
          </ToggleButtonGroup>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
            }}
          >
            <Select value={status} onChange={handleChangeFilter}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Ongoing">Ongoning</MenuItem>
              <MenuItem value="Accomplished">Accomplished</MenuItem>
              <MenuItem value="Future">Future</MenuItem>
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
