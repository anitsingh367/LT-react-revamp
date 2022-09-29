import { Box, Container, Typography } from "@mui/material";

import React from "react";

const About = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          padding: "4rem",
          fontWeight: "800",
          fontSize: "2.5rem",
        }}
      >
        About Us
      </Typography>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "4rem",
            alignItems: "center",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "60%",
            }}
          >
            <img src="https://dummyimage.com/720x600" alt="img" width="100%" />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", fontSize: { lg: "36px", xs: "24px" } }}
            >
              About The Living Treasure
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: "800" }}>THE LIVING TREASURE</span> is
              a registered non-profit, non-governmental organization having the
              twin objectives of:
            </Typography>
            <Typography
              sx={{
                display: "flex",
                width: 1,
                flexDirection: "column",
              }}
            >
              <ol style={{ marginLeft: "2rem", fontSize: "16px" }}>
                <li>Personality Development through Self-Evaluation.</li>
                <li>
                  Helping the needy, less privileged brethren of our society, by
                  providing them with the basic services without any
                  discrimination of religion, caste and creed.
                </li>
              </ol>
            </Typography>
            <Typography variant="body1">
              To achieve the above objectives we organize the following:
            </Typography>
            <Typography
              sx={{
                display: "flex",
                width: 1,
                flexDirection: "column",
              }}
            >
              <ol style={{ marginLeft: "2rem", color: "inherit" }}>
                <li>Mind Elevation Programmes.</li>
                <li>
                  Public seminars, workshops, discourses and other programmes
                  for Self-Development, Growth and Self- Transformation.
                </li>
                <li>
                  Providing FREE basic medical, educational facilities and all
                  types of counseling services.
                </li>
                <li>
                  Camps for blood donation, vaccination and diagnostic
                  investigations, etc.
                </li>
              </ol>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "4rem",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: {
              lg: "row-reverse",
              md: "column",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "70%",
              textAlign: { md: "right", sm: "center", xs: "center" },
            }}
          >
            <img src="https://dummyimage.com/720x600" alt="img" width="100%" />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", fontSize: { lg: "36px", xs: "24px" } }}
            >
              About the Logo
            </Typography>
            <Typography variant="body1">
              Two Leaves shown in the logo of the living treasure Depict two
              extreme states of one's mind. One leaf is shown as totally dry
              with only skeleton left, depicting a dry state of mind, whereas
              the other leaf is fully green and full of life. Now, the dry state
              of mind means a mind without love, care,hospitality, concern and
              simplicity. A person possessing dominating, adamant attitudes is
              always depressed, confused and destructive in habits. So this kind
              of personality is of no use to the society, except the hope that
              transformation is possible with proper nurturing and care.One
              thing is very clear that this dry-looking leaf was not born dry,
              rather it was fresh looking, fully green, very pleasing,
              attractive and full of life at the time of birth. But with the
              passage of time, onslaughts of surroundings and environment it
              shed off from the tree which had to take care of its well-being in
              every way, irrespective of whether the leaf is thankful or
              thankless, agreeing or disagreeing, surrendering or not before the
              supremacy of the tree. But now once broken from the secured
              system, the leaf is sucked out of its beauty, charm, freshness and
              life And in a matter of time it loses its identity forever and
              gets accumulated with the dust and dirt of the ground. And once
              broken-off there is no way it could be rejoined with the Creator -
              the tree. But, fortunately for the human mind, there is a hope,
              there is a chance, a reunion is possible, a transformation is
              possible, if one decides to shed off one's heavy weight of egoism,
              dominating attitudes, anger, etc. And surrendering before the
              master of this universe i.e. the system under which this universe
              is working for millions of years and will continue in the same
              way.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                width: 1,
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              "AAD SACH JUGAADH SACH HAI BI SACH NANAK HOSI BHI SACH".
            </Typography>
            <Typography variant="body1">
              To achieve the above objectives we organize the following:
            </Typography>
            <Typography
              sx={{
                display: "flex",
                width: 1,
                flexDirection: "column",
              }}
            >
              One has to activate one's thought process perfectly in unison with
              this system by constantly working with the laws of nature which
              always surround us. So, a life full of youth, full of beauty, full
              of the freshness and full of freedom is possible, if we decide to
              work with The Truth, whichAs a workshop is doing and turning life
              into a well blossomed GREEN LEAF.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "60%",
            }}
          >
            <img src="https://dummyimage.com/720x600" alt="img" width="100%" />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", fontSize: { lg: "36px", xs: "24px" } }}
            >
              Our Vision , Mission
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              neque libero, pulvinar et elementum quis, facilisis eu ante.
              Mauris non placerat sapien. Pellentesque tempor arcu non odio
              scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam varius eros consequat auctor gravida. Fusce
              tristique lacus at urna sollicitudin pulvinar. Suspendisse
              hendrerit ultrices mauris.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
