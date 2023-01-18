import React, { useState, useEffect } from "react";
import CustomCard from "../Card/CustomCard.react";
import {
  Typography,
  Container,
  Box,
  Pagination,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { FiberManualRecord as LiveDot } from "@mui/icons-material";
import PropTypes from "prop-types";
import ShareIcon from "@mui/icons-material/Share";
import EventModal from "../EventModal/EventModal.react";
import useHashRouteToggle from "./../../customHooks/useHashRouteToggle";

EventPages.propTypes = {
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

EventPages.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
      heading: "This must be upcoming",
      description:
        "A New India Together fsdhfjsdhf sdkjfsdjkfhsdkj fhsdkjfhsdkjfhsdfkjsdhf ksjdfhsdkjfh sdkjfshdfkjsdfhkjsdhfksdjhfsd kjf fhdjshfksjd fhskdjfhskdjfh sdkjfhsdf kj sdfh",
      status: "Upcoming",
      date: {
        start_date: "2023-09-06 19:00:00",
        end_date: "2023-09-06 22:00:00",
      },
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU",
      heading: "This must be finished",
      description: "Description 2",
      status: "Finished",
      date: {
        start_date: "2022-09-05 20:00:00",
        end_date: "2022-09-05 22:00:00",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1550330562-b055aa030d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      heading: "This must be live",
      description: "Description 3",
      status: "Live",
      date: {
        start_date: "2022-09-05 19:00:00",
        end_date: "2022-09-09 03:06:00",
      },
    },
    {
      image: "",
      heading: "This must be upcoming",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "Upcoming",
      date: {
        start_date: "2022-09-11 19:00:00",
        end_date: "2022-09-12 03:06:00",
      },
    },
    {
      image: "",
      heading: "This must be upcoming",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      status: "Upcoming",
      date: {
        start_date: "2022-09-11 19:00:00",
        end_date: "2022-09-12 03:06:00",
      },
    },
  ],
};

export default function EventPages(props) {
  // Handle status
  const [status, setStatus] = useState("All");
  const [eventFilter, setProjectFilter] = useState(props.content);
  const [openEventModal, setOpenEventModal] = useHashRouteToggle("event");
  const [selectedEvent, setSelectedEvent] = useState({
    heading: "",
    status: "",
    description: "",
  });
  const handleEventCard = (selectedData) => {
    setOpenEventModal(true);
    setSelectedEvent({
      heading: selectedData.heading,
      status: selectedData.status,
      description: selectedData.description,
    });
  };

  useEffect(() => {
    const filteredData = props.content.filter((item) => {
      let itemStatus = item.status;
      return status === "All" ? item : itemStatus === status;
    });
    setProjectFilter(filteredData);
  }, [status, props.content]);

  const handleChangeToggle = (event) => {
    if (event.target.value !== null) {
      setStatus(event.target.value);
    }
  };

  // Status Color
  const statusColor = {
    Live: "#ED0000",
    Upcoming: "#388E3C",
    Finished: "#999999",
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
      <EventModal
        isOpen={openEventModal}
        onClose={(value) => setOpenEventModal(value)}
        heading={selectedEvent.heading}
        status={selectedEvent.status}
        description={selectedEvent.description}
        onSubmit={(value) => {
          setOpenEventModal(value);
        }}
      />
      <Typography
        variant="h4"
        align="center"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: "2rem",
        }}>
        <span style={{ color: "var(--primary-color)" }}> Events </span> at the
        living treasure
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
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}>
          <ToggleButtonGroup
            aria-label="text button group"
            size="large"
            color="primary"
            exclusive
            value={status}
            onChange={handleChangeToggle}
            sx={{
              display: "flex",
              justifyContent: { sm: "center", xs: "center" },
            }}>
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Live">Live</ToggleButton>
            <ToggleButton value="Upcoming">Upcoming</ToggleButton>
            <ToggleButton value="Finished">Finished</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
        }}>
        {eventFilter?.map((items, index) => {
          console.log(items);
          return (
            <Box
              sx={{
                height: "auto",
                width: "18.5rem",
                margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
              }}
              key={index}>
              <CustomCard
                content={{
                  image: items.image,
                  heading: items.heading,
                  description: items.description,
                  chipTemplate: {
                    icon: items.status === "Live" ? LiveDot : null,
                    chipText: items.status,
                    textColor: statusColor[items.status],
                  },
                  primaryBtn: {
                    btnText: "View Details",
                    onClick: () => {
                      handleEventCard({
                        heading: items.heading,
                        status: items.status.toLowerCase(),
                        description: items.description,
                      });
                    },
                  },
                  actionIcon: ShareIcon,
                }}
              />
            </Box>
          );
        })}
      </Container>
      <Pagination count={10} shape="rounded" />
    </Container>
  );
}
