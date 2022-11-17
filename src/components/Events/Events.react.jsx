// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

// Import other packages
import { Button, Typography, Container, Box } from "@mui/material";
import {
  Share as ShareIcon,
  FiberManualRecord as LiveDot,
} from "@mui/icons-material";

import CustomCard from "../Card/CustomCard.react";
import EventModal from "../EventModal/EventModal.react";
import useHashRouteToggle from "../../customHooks/useHashRouteToggle";

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
      heading: "This must be upcoming",
      description:
        "A New India Together fsdhfjsdhf sdkjfsdjkfhsdkj fhsdkjfhsdkjfhsdfkjsdhf ksjdfhsdkjfh sdkjfshdfkjsdfhkjsdhfksdjhfsd kjf fhdjshfksjd fhskdjfhskdjfh sdkjfhsdf kj sdfh",
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
      date: {
        start_date: "2022-09-11 19:00:00",
        end_date: "2022-09-12 03:06:00",
      },
    },
  ],
};

export default function Events(props) {
  const statusColor = {
    live: "#ED0000",
    upcoming: "#388E3C",
    finished: "#999999",
  };

  const newEventList = props.content.map((items) => {
    const startDate = items.date?.start_date;
    const endDate = items.date?.end_date;

    if (moment().isBetween(startDate, endDate)) {
      items["chipTemplate"] = {
        icon: LiveDot,
        chipText: "Live",
        textColor: statusColor.live,
        iconColor: statusColor.live,
      };
    } else if (moment().isBefore(startDate)) {
      items["chipTemplate"] = {
        chipText: "Upcoming",
        textColor: statusColor.upcoming,
      };
    } else if (moment().isAfter(endDate)) {
      items["chipTemplate"] = {
        chipText: "Finished",
        textColor: statusColor.finished,
      };
    }

    return items;
  });

  const [openEventModal, setOpenEventModal] = useHashRouteToggle("event"); //useHasRouteToggle is used for controlling browser back button
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

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
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
        {newEventList
          ?.slice(0, 8)
          .sort(
            (a, b) => new Date(a.date.start_date) - new Date(b.date.start_date)
          )
          .filter((items) => {
            return items.chipTemplate.chipText !== "Finished";
          })
          .map((items, index) => {
            const startDate = items.date?.start_date;
            const endDate = items.date?.end_date;
            const readableStartDate = moment(startDate).format("llll");
            const readbleEndDate = moment(endDate).format("h:mm A");
            const description =
              items.description +
              `. Session will be on ${readableStartDate}- ${readbleEndDate}`;
            return (
              <Box
                sx={{
                  height: "auto",
                  width: "16rem",
                  margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                }}
                key={index}
              >
                <CustomCard
                  content={{
                    ...items,
                    description: description,
                    primaryBtn: {
                      btnText: "View Details",
                      onClick: () => {
                        handleEventCard({
                          heading: items.heading,
                          status: items.chipTemplate.chipText?.toLowerCase(),
                          description: description,
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
      {props.content && props.content?.length > 0 && (
        <Button variant="contained" color="primary" sx={{ margin: "1rem" }}>
          View All
        </Button>
      )}
    </section>
  );
}
