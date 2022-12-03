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
  Pagination,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import ShareIcon from "@mui/icons-material/Share";
import { useLocation } from "react-router-dom";
import ContributeModal from "../Modal/ContributeModal.react";
import VolunteerModal from "../VolunteerModal/VolunteerModal.react";
import useHashRouteToggle from "../../customHooks/useHashRouteToggle";

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
  content: [
    {
      projectId: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Ongoing Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
      category: "Education",
      status: "Ongoing",
    },
    {
      projectId: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Ongoing Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
      category: "Education",
      status: "Ongoing",
    },
    {
      projectId: "3",
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Future Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium, voluptate harum iste sunt optio quo maxime repellat et mollitia.",
      category: "Medical",
      status: "Future",
    },
    {
      projectId: "4",
      image: "",
      heading: "Accomplished 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      category: "Medical",
      status: "Accomplished",
    },
    {
      projectId: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "Future 1",
      description: "Description 1",
      category: "Medical",
      status: "Future",
    },
    {
      projectId: "6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "Future 2",
      description: "Description 2",
      category: "Education",
      status: "Future",
    },
    {
      projectId: "7",
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "Future 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos apiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maximes!",
      category: "Medical",
      status: "Future",
    },
    {
      projectId: "8",
      image: "",
      heading: "Ongoing 4",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      category: "Education",
      status: "Ongoing",
    },
  ],
};
export default function ProjectsPage(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState(
    location?.state?.status ? location?.state?.status : "All"
  );
  const [projectFilter, setProjectFilter] = useState(props.content);

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
                        onClick: () => {
                          setViewDetail(true);
                          handleDetail(items);
                        },
                      },
                      actionIcon: ShareIcon,
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
            })}
          </Container>
          <Pagination count={10} shape="rounded" />
        </Container>
      )}
    </>
  );
}
