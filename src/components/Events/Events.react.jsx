// Import npm packages
import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import PropTypes from "prop-types";
import CustomCard from "../Card/CustomCard.react";
import LiveDot from "@mui/icons-material/FiberManualRecord";
import ShareIcon from "@mui/icons-material/Share";
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
  content: [
    {
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
        aspectRatio: "16/8",
      },

      heading: "This must be upcoming",
      description:
        "A New India Together fsdhfjsdhf sdkjfsdjkfhsdkj fhsdkjfhsdkjfhsdfkjsdhf ksjdfhsdkjfh sdkjfshdfkjsdfhkjsdhfksdjhfsd kjf fhdjshfksjd fhskdjfhskdjfh sdkjfhsdf kj sdfh",
      date: {
        start_date: "2023-09-06 19:00:00",
        end_date: "2023-09-06 22:00:00",
      },
    },
    {
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
        aspectRatio: "16/8",
      },
      heading: "This must be finished",
      description: "Description 2",
      date: {
        start_date: "2023-09-05 20:00:00",
        end_date: "2023-09-05 22:00:00",
      },
    },
    {
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu39eyj7mkHZ2gnUmKmU9smZN8F3mI7xeC2DFXhTWwOSiL7JaliiMiC8NF3hZK-m1AD8&usqp=CAU",
        aspectRatio: "16/8",
      },
      heading: "This must be live",
      description: "Description 3",
      date: {
        start_date: "2023-09-05 19:00:00",
        end_date: "2023-09-09 03:06:00",
      },
    },
    {
      image: {
        url: "",
        aspectRatio: "16/8",
      },
      heading: "This must be upcoming",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      date: {
        start_date: "2023-09-11 19:00:00",
        end_date: "2023-09-12 03:06:00",
      },
    },
    {
      image: {
        url: "",
        aspectRatio: "16/8",
      },
      heading: "This must be upcoming",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      date: {
        start_date: "2023-09-11 19:00:00",
        end_date: "2023-09-12 03:06:00",
      },
    },
  ],
};

export default function Events(props) {
  let statusColor = {
    live: "#ED0000",
    upcoming: "#388E3C",
    finished: "#999999",
  };

  let newEventList = props.content.map((items) => {
    let startDate = items.date?.start_date;
    let endDate = items.date?.end_date;

    if (new Date(startDate) <= new Date() && new Date(endDate) >= new Date()) {
      items["chipTemplate"] = {
        icon: LiveDot,
        chipText: "Live",
        textColor: statusColor.live,
        iconColor: statusColor.live,
      };
    } else if (
      new Date(startDate) > new Date() &&
      new Date(endDate) > new Date()
    ) {
      items["chipTemplate"] = {
        chipText: "Upcoming",
        textColor: statusColor.upcoming,
      };
    } else if (
      new Date(startDate) < new Date() &&
      new Date(endDate) < new Date()
    ) {
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
      status: selectedData.chipTemplate.chipText?.toLowerCase(),
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alingItem: "center",
          width: 1,
          flexDirection: { lg: "row", md: "column", xs: "column" },
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "50%",
          }}
        >
          {newEventList
            ?.slice(0, 1)
            .sort(
              (a, b) =>
                new Date(a.date.start_date) - new Date(b.date.start_date)
            )
            .filter((items) => {
              return items.chipTemplate.chipText !== "Finished";
            })
            .map((items, index) => {
              let startDate = items.date?.start_date;
              let endDate = items.date?.end_date;
              let sD = moment(startDate).format("llll");
              let eD = moment(endDate).format("h:mm A");
              let description =
                items.description + `. Session will be on ${sD}- ${eD}`;
              return (
                <Box
                  sx={{
                    height: "auto",
                    width: "80%",
                    // margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
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
                            ...items,
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
        </Box>
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            gap: "1rem",
          }}
        >
          {newEventList
            ?.slice(0, 4)
            .sort(
              (a, b) =>
                new Date(a.date.start_date) - new Date(b.date.start_date)
            )
            .filter((items) => {
              return items.chipTemplate.chipText !== "Finished";
            })
            .map((items, index) => {
              let startDate = items.date?.start_date;
              let endDate = items.date?.end_date;
              let sD = moment(startDate).format("llll");
              let eD = moment(endDate).format("h:mm A");
              let description =
                items.description + `. Session will be on ${sD}- ${eD}`;
              return (
                <Box
                  sx={{
                    height: "50%",
                    width: "16rem",
                    // margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
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
                            ...items,
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
        </Box>
      </Container>
      {props.content && props.content?.length > 0 && (
        <Button variant="contained" color="primary" sx={{ margin: "2rem" }}>
          View All
        </Button>
      )}
    </section>
  );
}
