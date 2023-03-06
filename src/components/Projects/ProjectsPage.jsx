import React, { useState, useEffect } from "react";
import CustomCard from "../Card/CustomCard.react";
import { Outlet, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  // Pagination,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import "./project.scss";

import { useLocation } from "react-router-dom";
import ContributeModal from "../ContributeModal/ContributeModal.react";
import VolunteerModal from "../VolunteerModal/VolunteerModal.react";
import useHashRouteToggle from "../../customHooks/useHashRouteToggle";
import { getProjectDetails } from "../../firebase";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

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
};
export default function ProjectsPage(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState(
    location?.state?.status ? location?.state?.status : "All"
  );
  const [projectFilter, setProjectFilter] = useState([]);

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

  const [projectDetails, setProjectDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjectDetails().then((data) => {
      setProjectDetails(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredData = projectDetails?.filter((item) => {
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
  }, [category, status, projectDetails]);

  const [openContributeModal, setOpenContributeModal] =
    useHashRouteToggle("contribute"); //useHasRouteToggle is used for controlling browser back button

  const [projectHeading, setProjectHeading] = useState("");
  const handleContributeModal = (value) => {
    setOpenContributeModal(true);
    setProjectHeading(value);
  };

  const [openVolunteerModal, setOpenVolunteerModal] =
    useHashRouteToggle("volunteer"); //useHasRouteToggle is used for controlling browser back button

  const handleVolunteerModal = (value) => {
    setOpenVolunteerModal(true);
    setProjectHeading(value);
  };

  const [isViewDetail, setViewDetail] = useState(false);
  const handleDetail = (item) => {
    navigate(`/projects/${item.projectId}`, {
      state: item,
    });
  };
  const params = useParams();
  const projectId = params.projectId;
  useEffect(() => {
    if (!projectId) {
      setViewDetail(false);
    } else {
      setViewDetail(true);
    }
  }, [projectId]);

  //Skeleton Loader initial state
  let skeletonCards = Array(3).fill(0);

  return (
    <>
      <ContributeModal
        isOpen={openContributeModal}
        onClose={(value) => setOpenContributeModal(value)}
        isNavbar={false}
        projectHeading={projectHeading}
      />
      <VolunteerModal
        isOpen={openVolunteerModal}
        onClose={(value) => setOpenVolunteerModal(value)}
        isNavbar={true}
        projectHeading={projectHeading}
      />
      {isViewDetail && <Outlet />}
      {!isViewDetail && (
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
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              gap: { lg: 0, sm: "1rem", xs: "1rem" },
            }}
          >
            <ToggleButtonGroup
              aria-label="text button group"
              size="large"
              color="primary"
              exclusive
              value={category}
              onChange={handleChangeToggle}
              sx={{
                display: "flex",
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <ToggleButton value="All">All</ToggleButton>
              <ToggleButton value="Education">Education</ToggleButton>
              <ToggleButton value="Medical">Medical</ToggleButton>
              <ToggleButton value="Charity">Charity</ToggleButton>
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
            {isLoading ? (
              skeletonCards.map((item, index) => {
                return <SkeletonCard key={index} />;
              })
            ) : projectFilter.length === 0 ? (
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}
              >
                <Typography>Oops! No Data found</Typography>
              </Container>
            ) : (
              projectFilter?.map((items, index) => {
                return (
                  <Box
                    sx={{
                      height: "auto",
                      width: "18.5rem",
                      margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                    }}
                    key={index}
                    className="cardImg"
                  >
                    <CustomCard
                      content={{
                        image: items.image,
                        heading: items.heading,
                        description: items.description,
                        chipTemplate: { chipText: items.category },
                        primaryBtn: {
                          btnText: "View Details",
                          onClick: () => {
                            setViewDetail(true);
                            handleDetail(items);
                          },
                        },

                        secondaryBtns: [
                          {
                            btnText: "Contribute",
                            onClick: () => {
                              handleContributeModal(items.heading);
                            },
                          },
                          {
                            btnText: "Volunteer",
                            onClick: () => {
                              handleVolunteerModal(items.heading);
                            },
                          },
                        ],
                      }}
                    />
                  </Box>
                );
              })
            )}
          </Container>
          {/* <Pagination count={10} shape="rounded" /> */}
        </Container>
      )}
    </>
  );
}
