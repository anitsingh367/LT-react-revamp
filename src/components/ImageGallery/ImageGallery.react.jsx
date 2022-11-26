import { useState } from "react";
import ImageModal from "./ImageModal.react";
import { ImageList, ImageListItem } from "@mui/material";

const ImageGallery = () => {
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
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  const [selectedImage, setSelectedImage] = useState("");
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const handleImageClick = (value, index) => {
    setSelectedImage(value);
    setImageModalOpen(true);
  };
  return (
    <div>
      <ImageList cols={3} gap={20} sx={{ padding: "0.5rem" }}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            className="gallery-image"
            onClick={() => {
              handleImageClick(item.img, index);
            }}
            sx={{
              cursor: "pointer",
              transition: "all 0.2s",
              opacity: 0.8,
              "&:hover": {
                transform: "scale(1.02)",
                opacity: 1,
              },
            }}
          >
            <img
              src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
              srcSet={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageModal
        img={selectedImage}
        open={isImageModalOpen}
        onClose={(value) => {
          setImageModalOpen(value);
        }}
      />
    </div>
  );
};

export default ImageGallery;
