import { Container,Modal, ImageListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "0.5rem",
  outline: "none",
};

const ImageModal = (props) => {
  const handleClose = () => props.onClose(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style}>
          <div
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              zIndex: 11111,
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ color: "inherit", cursor: "pointer" }} />
          </div>
          <ImageListItem
            sx={{
              padding: {
                lg: "0.5rem",
                md: "0.5rem",
                sm: "0.5rem",
                xs: "1.2rem",
              },
            }}
          >
            <img
              src={`${props.img}?w=800&h=800&fit=crop&auto=format`}
              srcSet={`${props.img}?fit=crop&auto=format`}
              alt={props.img}
            />
          </ImageListItem>
        </Container>
      </Modal>
    </div>
  );
};

export default ImageModal;
