// Import npm packages
import PropTypes from "prop-types";

import ContributeModal from "../Modal/ContributeModal.react";
import "../css/EventCard.scss";

// Import other packages
import LiveDot from "@mui/icons-material/FiberManualRecord";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";

import defaultImage from "../../assets/default-card-image.jpg";
import { useState } from "react";

EventCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    status: PropTypes.oneOf(["none", "upcoming", "live", "finished"]),
    description: PropTypes.string,
    isProject: PropTypes.bool,
  }),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

EventCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    image: "",
    heading: "",
    description: "",
    status: "none",
    isProject: false,
  },
  isOpen: false,
};

export default function EventCard(props) {
  let status = props.content.status.toLowerCase();
  let statusColor =
    status === "upcoming"
      ? "#388E3C"
      : status === "live"
      ? "#ED0000 !important"
      : status === "finished"
      ? "#999999"
      : "";

  const [openContributeModal, setOpenContributeModal] = useState(false);

  const handleContributeButton = (value) => {
    if (value === "Contribute") {
      setOpenContributeModal(true);
    }
  };

  return (
    <div>
      <ContributeModal
        isOpen={openContributeModal}
        onClose={(value) => setOpenContributeModal(value)}
      />
      {props.content && (
        <Card
          raised
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "20.063rem",
            height: "30.5rem",
          }}
        >
          <CardMedia
            component="img"
            style={{ aspectRatio: 1 / 1 }}
            image={props.content?.image ? props.content.image : defaultImage}
            alt="green iguana"
          />
          <CardContent sx={{ paddingBottom: "0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className="truncate"
                gutterBottom
                variant="h5"
                component="div"
              >
                {props.content?.heading}
              </Typography>
              {(props.content.status !== "none" || !props.content.status) && (
                <Chip
                  sx={{
                    color: statusColor,
                    textTransform: "uppercase",
                  }}
                  icon={
                    props.content?.status === "live" ? (
                      <LiveDot
                        sx={{
                          color: statusColor,
                          fontSize: "0.813rem",
                        }}
                      />
                    ) : (
                      <></>
                    )
                  }
                  label={props.content.status}
                />
              )}
            </div>

            <Typography
              variant="body2"
              className="line-clamp"
              color="text.secondary"
            >
              {props.content?.description}
            </Typography>
          </CardContent>
          {props.content?.isProject && (
            <CardActions sx={{ marginTop: "auto" }}>
              {["Contribute", "View Project"].map((items, index) => {
                return (
                  <Button
                    key={index}
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ flex: 1, color: "primary.contrastText" }}
                    onClick={() => {
                      handleContributeButton(items);
                    }}
                  >
                    {items}
                  </Button>
                );
              })}
            </CardActions>
          )}
          {!props.content?.isProject && (
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "auto",
              }}
            >
              <Button sx={{ color: "#000000de" }} size="small">
                View Details
              </Button>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          )}
        </Card>
      )}
    </div>
  );
}
