import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { Navigation } from "swiper";
import useHashRouteToggle from "../../customHooks/useHashRouteToggle";
import {
  Avatar,
  // Box,
  Typography,
  Container,
  // LinearProgress,
  // Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import data from "../../data/imgDB";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import ContributeModal from "../Modal/ContributeModal.react";
import { useNavigate } from "react-router-dom";
import ImageModal from "../ImageGallery/ImageModal.react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];
const ProjectViewPage = () => {
  const location = useLocation();
  const state = location.state;

  const [openContributeModal, setOpenContributeModal] =
    useHashRouteToggle("contribute"); //useHasRouteToggle is used for controlling browser back button

  // const handleContributeModal = (value) => {
  //   setOpenContributeModal(true);
  // };

  const [selectedImage, setSelectedImage] = useState("");
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const navigate = useNavigate();
  const handleImageClick = (value, index) => {
    if (index === 5) {
      navigate("/image-gallery");
    } else {
      setSelectedImage(value);
      setImageModalOpen(true);
    }
  };

  return (
    <>
      {openContributeModal && (
        <ContributeModal
          isOpen={openContributeModal}
          onClose={(value) => setOpenContributeModal(value)}
          isNavbar={false}
          projectHeading={"some project name"}
        />
      )}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {state && (
          <Container maxWidth={false} disableGutters>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              {state.heading.toUpperCase()}
            </Typography>

            <Avatar
              alt="project-image"
              src={state.image}
              variant="square"
              sx={{
                width: 1,
                height: { lg: "60vh", md: "60vh", sm: "40vh", xs: "30vh" },
              }}
            />
          </Container>
        )}
        {/* 
        <Container
          sx={{
            marginTop: "2rem",
            padding: "1rem 0",
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Container sx={{ display: "flex", flex: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
                Raised
              </Typography>
              <Typography>$632937</Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={40}
              sx={{ height: "0.7rem", flex: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
                Goal
              </Typography>
              <Typography>$632937</Typography>
            </Box>
          </Container>

          <Button
            sx={{ marginLeft: "1rem", padding: "0.5rem 1.5rem", flex: 1 }}
            variant="contained"
            onClick={handleContributeModal}
          >
            Donate Now
          </Button>
        </Container> */}
        <Container sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5" sx={{ color: "gray", marginTop: "2rem" }}>
              APUN KE PUNTERS
            </Typography>
            <Container
              className="volunteer-parent"
              disableGutters
              maxWidth={false}
              sx={{
                textAlign: "center",
              }}
            >
              <Container
                disableGutters
                maxWidth="xl"
                //   className="swiper-container"
              >
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 30,
                    },
                  }}
                  speed={500}
                >
                  {data.map((item, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "13rem",
                          justifyContent: "space-between",
                          gap: 10,
                          backgroundColor: "#D4EFE8",
                        }}
                      >
                        <Avatar
                          src={item.urls.thumb}
                          variant="square"
                          sx={{ width: 100, height: 100, marginBottom: 1 }}
                        />
                        <Typography variant="body2" gutterBottom>
                          {item.user.name}
                        </Typography>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Container>
            </Container>
          </Box> */}

          {state && (
            <Typography
              variant="body1"
              sx={{ lineHeight: "1.7rem" }}
              color="secondary"
              dangerouslySetInnerHTML={{ __html: state.description }}
            ></Typography>
          )}
        </Container>
        {itemData?.length > 0 && (
          <Container>
            <ImageList cols={3} gap={10} sx={{ padding: "0.5rem" }}>
              {itemData.slice(0, 6).map((item, index) => (
                <ImageListItem
                  key={item.img}
                  onClick={() => {
                    handleImageClick(item.img, index);
                  }}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    opacity: 0.8,
                    "&:hover": {
                      transform: index !== 5 && "scale(1.02)",
                      opacity: 1,
                    },
                  }}
                >
                  <img
                    src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  {index === 5 && (
                    <ImageListItemBar
                      title={"View More"}
                      sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        },
                      }}
                      actionIcon={
                        <IconButton
                          sx={{
                            color: "rgba(255, 255, 255, 0.54)",
                          }}
                          aria-label={`info about ${item.title}`}
                        >
                          <AddIcon />
                        </IconButton>
                      }
                    />
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        )}

        <ImageModal
          img={selectedImage}
          open={isImageModalOpen}
          onClose={(value) => {
            setImageModalOpen(value);
          }}
        />
      </Container>
    </>
  );
};

export default ProjectViewPage;
