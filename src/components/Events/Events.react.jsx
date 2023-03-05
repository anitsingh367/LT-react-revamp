// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import useHashRouteToggle from "../../customHooks/useHashRouteToggle";
import { Link } from "react-router-dom";
// Import other packages
import { Button, Typography, Container, Box } from "@mui/material";
import {
  // Share as ShareIcon,
  FiberManualRecord as LiveDot,
} from "@mui/icons-material";

import CustomCard from "../Card/CustomCard.react";
import EventModal from "../EventModal/EventModal.react";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import "./Events.scss";

import { getEventDetails } from "../../firebase";

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
};

export default function Events(props) {
  const statusColor = {
    live: "#ED0000",
    upcoming: "#388E3C",
    finished: "#999999",
  };

  const [eventDetails, setEventDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getEventDetails().then((data) => {
      setEventDetails(data);
      setIsLoading(false);
    });
  }, []);
  const currentDate = new Date();
  const newEventList = eventDetails
    ?.sort((a, b) => {
      let aDate = new Date(a.date?.startDate);
      let bDate = new Date(b.date?.startDate);
      let aEndDate = new Date(a.date?.endDate);
      let bEndDate = new Date(b.date?.endDate);

      if (aDate < currentDate && aEndDate > currentDate) {
        return -1;
      } else if (bDate < currentDate && bEndDate > currentDate) {
        return 1;
      } else if (aDate > currentDate && bDate > currentDate) {
        return aDate - bDate;
      } else {
        return bEndDate - aEndDate;
      }
    })
    .map((items) => {
      const startDate = items.date?.startDate;
      const endDate = items.date?.endDate;

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
    type: "",
    mapUrl: "",
    youtubeUrl: "",
  });

  const handleEventCard = (selectedData) => {
    setOpenEventModal(true);
    setSelectedEvent({
      heading: selectedData.heading,
      status: selectedData.status,
      description: selectedData.description,
      type: selectedData.type,
      mapUrl: selectedData.mapUrl,
      youtubeUrl: selectedData.youtubeUrl,
    });
  };
  //Skeleton Loader initial state
  let skeletonCards = Array(5).fill(0);
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={2}
    >
      <EventModal
        isOpen={openEventModal}
        onClose={(value) => setOpenEventModal(value)}
        heading={selectedEvent.heading}
        status={selectedEvent.status}
        description={selectedEvent.description}
        type={selectedEvent.type}
        mapUrl={selectedEvent.mapUrl}
        youtubeUrl={selectedEvent.youtubeUrl}
        onSubmit={(value) => {
          setOpenEventModal(value);
        }}
      />
      <Typography
        variant="h4"
        align="center"
        mb={2}
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        <Box component="span" color="primary.main">
          events
        </Box>{" "}
        at the living treasure
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gap: 2,
          gridAutoFlow: { lg: "column" },
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyItems: "stretch",
          alignContent: "center",
        }}
      >
        {isLoading ? (
          skeletonCards.map((item) => {
            return <SkeletonCard />;
          })
        ) : newEventList.length === 0 ? (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Oops! No Data found</Typography>
          </Container>
        ) : (
          newEventList
            ?.slice(0, 5)
            .filter((items) => {
              return items.chipTemplate.chipText !== "Finished";
            })
            .map((items, index) => {
              const startDate = items.date?.startDate;
              const endDate = items.date?.endDate;
              const readableStartDate = moment(startDate).format("llll");
              const readbleEndDate = moment(endDate).format("h:mm A");
              const description =
                items.description +
                `. Session will be on ${readableStartDate}- ${readbleEndDate}`;
              return (
                <Box
                  sx={{
                    height: "auto",
                    width: { lg: "21rem", md: "auto", sm: "auto" },
                    margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
                  }}
                  className="event-card"
                  key={index}
                >
                  <CustomCard
                    content={{
                      image: items.imageUrl,
                      heading: items.title,
                      ...items,
                      description: description,
                      type: items.type,
                      primaryBtn: {
                        btnText: "View Details",
                        onClick: () => {
                          handleEventCard({
                            heading: items.title,
                            status: items.chipTemplate.chipText?.toLowerCase(),
                            description: description,
                            type: items.type,
                            mapUrl: items.mapUrl,
                            youtubeUrl: items.youtubeUrl,
                          });
                        },
                      },
                    }}
                  />
                </Box>
              );
            })
        )}
      </Container>

      {newEventList && newEventList?.length > 0 && (
        <Link to="/events" className="link">
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            View All
          </Button>
        </Link>
      )}
    </Box>
  );
}
