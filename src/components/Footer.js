import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
          padding: "3rem",
          background: "#435061",
          color: "#fff",
          flexWrap: { lg: "nowrap", md: "wrap", sm: "wrap", xs: "wrap" },
          width: "100%",
        }}
      >
        <Grid item>
          <Typography
            borderBottom={1}
            variant="h5"
            sx={{
              textTransform: "uppercase",
              width: "100%",
              marginBottom: { md: "2rem", sm: "1.5rem", xs: "1rem" },
            }}
            divider
          >
            About the living treasure
          </Typography>

          <Typography
            sx={{
              width: { lg: "80%", md: "85%%", sm: "90%" },
              marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            laudantium debitis ipsum ut nam nemo officiis dolore optio, quasi
            rem!
          </Typography>

          <Button
            variant="outlined"
            sx={{
              marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
            }}
          >
            Outlined
          </Button>
        </Grid>
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid item>
            <Typography
              borderBottom={1}
              variant="h5"
              sx={{
                textTransform: "uppercase",
                width: "100%",
                marginBottom: "10px",
              }}
              divider
            >
              upcoming events
            </Typography>
            <Box>
              <Typography
                borderBottom={0.5}
                sx={{
                  fontSize: "16px",
                  width: "100%",
                  marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
                }}
              >
                Gurbani SEMINAR - GRATITUDE
              </Typography>
            </Box>
            <Box>
              <Typography
                borderBottom={0.5}
                sx={{
                  fontSize: "16px",
                  width: "100%",
                  marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
                }}
              >
                Gurbani SEMINAR - GRATITUDE
              </Typography>
            </Box>
            <Box>
              <Typography
                borderBottom={0.5}
                sx={{
                  fontSize: "16px",
                  width: "100%",
                  marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
                }}
              >
                Gurbani SEMINAR - GRATITUDE
              </Typography>
            </Box>
            <Box>
              <Typography
                borderBottom={0.5}
                sx={{
                  fontSize: "16px",
                  width: "100%",
                  marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
                }}
              >
                Gurbani SEMINAR - GRATITUDE
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid item sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                borderBottom={1}
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                reiciendis
              </Typography>
              <Typography
                sx={{ marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" } }}
              >
                Phone: 9384693211
              </Typography>
              <Typography
                sx={{ marginBottom: { md: "2rem", sm: "2rem", xs: "2rem" } }}
              >
                Email: abc@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#435061",
          color: "#fff",
          gap: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <YouTubeIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: "1rem",
          background: "#3A4858CC",
          color: "#fff",
          gap: "2rem",
        }}
      >
        <Typography>
          Copyright 2022. All Rights Reserved by The Living Treasure.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
