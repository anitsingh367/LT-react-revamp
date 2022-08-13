// Import npm packages
import PropTypes from "prop-types";

import "./css/EventCard.scss";

// Import other packages
import ShareIcon from "@mui/icons-material/Share";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

EventCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    status: PropTypes.oneOf(["none", "upcoming", "live", "finished"]),
    description: PropTypes.string,
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
  },
};

export default function EventCard(props) {
  let statusColor =
    props.content.status === "upcoming"
      ? "#29af8a"
      : props.content.status === "live"
      ? "red"
      : props.content.status === "finished"
      ? "black"
      : "";
  return (
    <div>
      {props.content && (
        <Card
          sx={{
            width: 345,
            height: 480,
            boxShadow: "1px 1px 5px rgb(161, 159, 159)",
          }}
        >
          {props.content.image && (
            <CardMedia
              component="img"
              height="300"
              image={props.content.image}
              alt="green iguana"
            />
          )}
          <CardContent sx={{ padding: 3, paddingBottom: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex" }}
            >
              <div className="truncate">{props.content?.heading}</div>
              {(props.content.status !== "none" || !props.content.status) && (
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: 28,
                    boxShadow: "none",
                    backgroundColor: statusColor,
                    "&:hover": {
                      backgroundColor: statusColor,
                      cursor: "default",
                      boxShadow: "none",
                    },
                    marginLeft: 2,
                    fontSize: "10px"
                  }}
                  disableRipple={true}
                >
                  {props.content.status}
                </Button>
              )}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              className="line-clamp"
            >
              {props.content?.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: 3 }}>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#29af8a",
                "&:hover": {
                  backgroundColor: "#1d8165",
                },
              }}
            >
              View Details
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#29af8a",
                "&:hover": {
                  backgroundColor: "#1d8165",
                },
              }}
              endIcon={<ShareIcon />}
            >
              Share
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
