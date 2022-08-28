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
  return (
    <>
      <Box sx={{ width: 1, backgroundColor: "#435061", fontFamily: "Roboto" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "10rem",
            backgroundColor: "#435061",
            padding: "2rem",
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
            }}
          >
            <ListSubheader
              sx={{
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
                paddingX: 0,
              }}
            >
              about the living treasure
            </ListSubheader>
            <ListItemText
              sx={{
                color: "#ffffff88",
                textAlign: "left",
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
              sx={{
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              UPCOMING EVENTS
            </ListSubheader>
            <ListItem sx={{ color: "#ffffff88" }}>
              GURBANI SEMINAR - GRATITUDE
            </ListItem>
            <Divider sx={{ backgroundColor: "#ffffff88" }} />
            <ListItem sx={{ color: "#ffffff88" }}>
              GURBANI DE CHANAN CH AKHAN - TIK JANA
            </ListItem>
            <Divider sx={{ backgroundColor: "#ffffff88" }} />
            <ListItem sx={{ color: "#ffffff88" }}>
              GURBANI DE CHANAN CH AKHAN - VEEH VISVAY YAKEEN HONA
            </ListItem>
            <Divider sx={{ backgroundColor: "#ffffff88" }} />
            <ListItem sx={{ color: "#ffffff88" }}>
              GURBANI DE CHANAN CH AKHAN - RETHARIA DA PARSAD
            </ListItem>
          </List>
          <List
            sx={{
              textAlign: "left",
              width: { lg: "33.33%", md: 1, sm: 1, xs: 1 },
            }}
          >
            <ListSubheader
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
                width: { lg: "80%", md: 1 / 2, sm: 1 / 2, xs: 1 },
                color: "#ffffff88",
              }}
            >
              THE LIVING TREASURE 109, S.P Mukherji Park, Near Tilak Nagar, New
              Delhi-110018 (India)
            </ListItem>
            <br />
            <br />
            <ListItem>
              <span style={{ color: "#fff" }}>Phone</span>
              <span style={{ color: "#ffffff88" }}>: +91-11-25981163</span>
            </ListItem>
            <ListItem>
              <span style={{ color: "#fff" }}>Email</span>
              <span style={{ color: "#ffffff88" }}>
                :info@thelivingtreasure.com
              </span>
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
            gap: "0.5rem",
            color: "#fff",
            paddingX: "0 !important",
          }}
          maxWidth={false}
        >
          <Typography
            sx={{
              padding: "1.5rem",
              background: "#323B45",
              width: 1,
              textAlign: "center",
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
