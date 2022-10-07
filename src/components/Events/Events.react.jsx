// Import npm packages
import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";
import LiveDot from "@mui/icons-material/FiberManualRecord";
import ShareIcon from "@mui/icons-material/Share";
import { EventsContent } from "../../data/SampleData";
import EventModal from "../EventModal/EventModal.react";

import moment from "moment";

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
  content: EventsContent,
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

  const [openEventModal, setOpenEventModal] = useState(false);
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
      {openEventModal && (
        <EventModal
          isOpen={openEventModal}
          onClose={(value) => setOpenEventModal(value)}
          heading={selectedEvent.heading}
          status={selectedEvent.status}
          description={selectedEvent.description}
        />
      )}
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
