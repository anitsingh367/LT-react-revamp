import React from "react";
import {
  List,
  ListItem,
  ListSubheader,
  Button,
  Box,
  Container,
  Divider,
  ListItemText,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "GURBANI SEMINAR - GRATITUDE",
    },
    {
      id: 2,
      title: "GURBANI DE CHANAN CH AKHAN - TIK JANA",
    },
    {
      id: 3,
      title: "GURBANI DE CHANAN CH AKHAN - VEEH VISVAY YAKEEN HONA",
    },
    {
      id: 4,
      title: "GURBANI DE CHANAN CH AKHAN - RETHARIA DA PARSAD",
    },
  ];
  let upcomingEventsLength = upcomingEvents.length;
  return (
    <>
      <Box
        sx={{
          width: 1,
          backgroundColor: "secondary.main",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "secondary.main",
            gap: "4rem",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <List
            sx={{
              width: { lg: "33.33%", md: 1, sm: 1, xs: 1 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              alignSelf: "start",
            }}
          >
            <ListSubheader
              disableGutters
              sx={{
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              about the living treasure
            </ListSubheader>
            <ListItemText
              sx={{
                color: "secondary.contrastText",
              }}
            >
              Promoting the doctrine of "The Universal Truth", which stands for
              equal value to every human, irrespective of caste, creed, color or
              gender.
            </ListItemText>
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalise",
                borderColor: "#fff",
                color: "#fff",
                marginTop: "1rem",
              }}
            >
              Know More
            </Button>
          </List>
          <List
            sx={{
              textAlign: "left",
              width: { lg: "33.33%", md: 1, sm: 1, xs: 1 },
            }}
          >
            <ListSubheader
              disableGutters
              sx={{
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              UPCOMING EVENTS
            </ListSubheader>
            {upcomingEvents.map((item, index) => {
              return (
                <div key={index}>
                  <ListItem
                    disableGutters
                    disablePadding
                    sx={{ color: "secondary.contrastText" }}
                  >
                    <ListItemText>{item.title}</ListItemText>
                  </ListItem>
                </div>
              );
            })}
          </List>
          <List
            sx={{
              width: { lg: "33.33%", md: 1, sm: 1, xs: 1 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListSubheader
              disableGutters
              sx={{
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              CONTACT US
            </ListSubheader>
            <ListItem
              sx={{
                color: "secondary.contrastText",
              }}
              disableGutters
              disablePadding
            >
              <ListItemText
                primary="THE LIVING TREASURE 109, S.P Mukherji Park, Near Tilak Nagar,
                New Delhi-110018 (India)"
              />
            </ListItem>
            <ListItem disableGutters disablePadding sx={{ marginTop: "auto" }}>
              <ListItemText sx={{ color: "secondary.contrastText" }}>
                <span style={{ color: "#fff" }}>Phone</span>: +91-11-25981163
              </ListItemText>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText sx={{ color: "secondary.contrastText" }}>
                <span style={{ color: "#fff" }}>Email</span>:
                info@thelivingtreasure.com
              </ListItemText>
            </ListItem>
          </List>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            color: "#fff",
            padding: "1.5rem",
          }}
        >
          <InstagramIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            background: "#323B45",
            textAlign: "center",
          }}
          maxWidth={false}
        >
          <Typography
            sx={{
              padding: "1.5rem",
            }}
          >
            Copyright 2022. All Rights Reserved by The Living Treasure.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
