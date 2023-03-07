import { useState } from "react";
import ImageModal from "./ImageModal.react";
import { ImageList, ImageListItem } from "@mui/material";
import { useLocation } from "react-router-dom";
const ImageGallery = () => {
  const location = useLocation();
  const state = location.state;
  const itemData = state.images;
  console.log(itemData);

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
              src={`${item}?w=400&h=400&fit=crop&auto=format`}
              srcSet={`${item}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
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
