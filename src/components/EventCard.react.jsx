// Import npm packages
import PropTypes from "prop-types";

import "./css/EventCard.scss";

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

import defaultImage from "../Assets/default-card-image.jpg";

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
};

export default function EventCard(props) {
  let statusColor =
    props.content.status?.toLowerCase() === "upcoming"
      ? "#388E3C"
      : props.content.status?.toLowerCase() === "live"
      ? "#ED0000 !important"
      : props.content.status?.toLowerCase() === "finished"
      ? "#999999"
      : "";

  return (
    <div>
      {props.content && (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "20.063rem",
            height: "30.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0.313rem 0.938rem rgb(206, 205, 205)",
          }}
        >
          <CardMedia
            component="img"
            style={{ aspectRatio: 1 / 1 }}
            image={props.content?.image ? props.content.image : defaultImage}
            alt="green iguana"
          />
          <CardContent sx={{ padding: "1rem", paddingBottom: 0 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Roboto",
              }}
            >
              <div className="truncate card-header">
                {props.content?.heading}
              </div>
              {(props.content.status !== "none" || !props.content.status) && (
                <Chip
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    lineHeight: "1.25rem",
                    letterSpacing: "0.016rem",
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
            </Typography>
            <Typography
              variant="body2"
              className="line-clamp"
              sx={{
                fontfamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontsize: "0.875rem",
                lineHeight: "1.25rem",
                letterspacing: "0.016rem",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              {props.content?.description}
            </Typography>
          </CardContent>
          {props.content?.isProject && (
            <CardActions
              sx={{ padding: "1em", height: "100%", alignItems: "flex-end" }}
            >
              {["Contribute", "View Project"].map((items, index) => {
                return (
                  <Button
                    key={index}
                    size="small"
                    variant="contained"
                    sx={{
                      flex: 1,
                      borderRadius: "0.375rem",
                      padding: "0.5rem 0",
                      backgroundColor: "#29af8a",
                      "&:hover": {
                        backgroundColor: "#1d8165",
                      },
                      fontWeight: 600,
                      fontsize: "0.875rem",
                      lineHeight: "1.25rem",
                      letterSpacing: "0.016rem",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
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
                padding: "0 1rem 1rem 1rem",
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              <Button
                size="small"
                variant="text"
                sx={{
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  marginLeft: "-0.188rem",

                  fontfamily: "Roboto",
                  color: "#000000DE",
                  fontsize: "0.875rem",
                  lineHeight: "1.25rem",
                  letterSpacing: "0.016rem",
                  textTransform: "uppercase",
                }}
              >
                View Details
              </Button>
              <IconButton aria-label="share">
                <ShareIcon
                  sx={{
                    color: "#5f5f5f",
                    fontSize: "1.125rem",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </CardActions>
          )}
        </Card>
      )}
    </div>
  );
}
