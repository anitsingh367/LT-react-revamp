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
      ? "#ED0000"
      : props.content.status?.toLowerCase() === "finished"
      ? "#999999"
      : "";

  return (
    <div>
      {props.content && (
        <Card
          sx={{
            width: "321px",
            maxHeight: "473px",
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgb(206, 205, 205)",
          }}
        >
          <CardMedia
            component="img"
            width="321px"
            height="264px"
            image={props.content?.image ? props.content.image : defaultImage}
            alt="green iguana"
          />
          <CardContent sx={{ padding: "16px", paddingBottom: 0 }}>
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
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "0px 10px",
                    background: "#F0F0F0",
                    color: statusColor,
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "20px",
                    letterSpacing: "0.25px",
                    borderRadius: "16px",
                    "&:hover": {
                      backgroundColor: "#F0F0F0",
                      cursor: "default",
                      boxShadow: "none",
                    },
                    marginLeft: 2,
                  }}
                  disableRipple={true}
                  startIcon={
                    props.content.status === "live" && (
                      <LiveDot style={{ fontSize: "13px" }} />
                    )
                  }
                >
                  {props.content.status}
                </Button>
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="line-clamp"
              sx={{
                fontfamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontsize: "14px",
                lineHeight: "20px",
                letterspacing: "0.25px",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              {props.content?.description}
            </Typography>
          </CardContent>
          {props.content?.isProject && (
            <CardActions sx={{ padding: "16px" }}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  flex: 1,
                  borderRadius: "6px",
                  padding: "8px 0",
                  backgroundColor: "#29af8a",
                  "&:hover": {
                    backgroundColor: "#1d8165",
                  },
                  fontWeight: 600,
                  fontsize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.25px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Contribute
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{
                  flex: 1,
                  borderRadius: "6px",
                  backgroundColor: "#29af8a",
                  padding: "8px 0",
                  "&:hover": {
                    backgroundColor: "#1d8165",
                  },
                  fontWeight: 600,
                  fontsize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.25px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                View Project
              </Button>
            </CardActions>
          )}
          <CardActions
            sx={{
              padding: "0 16px 16px 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "6px",
                fontWeight: 600,
                marginLeft: "-3px",
                marginTop: "10px",
                fontfamily: "Roboto",
                color: "#000000DE",
                fontsize: "14px",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                textTransform: "uppercase",
              }}
            >
              View Details
            </Button>
            <IconButton aria-label="share">
              <ShareIcon
                sx={{ color: "#5f5f5f", fontSize: "18px", cursor: "pointer" }}
              />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
