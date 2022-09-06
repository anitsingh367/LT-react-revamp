// Import npm packages

import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";

import defaultImage from "../../assets/default-card-image.jpg";

import { Box, SvgIcon } from "@mui/material";

CustomCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    chipTemplate: PropTypes.exact({
      icon: PropTypes.object,
      chipText: PropTypes.string,
      iconColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
    secondaryBtns: PropTypes.arrayOf(
      PropTypes.exact({
        icon: PropTypes.object,
        btnText: PropTypes.string,
        onClick: PropTypes.func,
      })
    ),
    primaryBtn: PropTypes.exact({
      btnIcon: PropTypes.object,
      btnText: PropTypes.string,
      onClick: PropTypes.func,
    }),
    actionIcon: PropTypes.object,
  }),
};
CustomCard.defaultProps = {
  content: {
    image: "",
    heading: "",
    description: "",
    chipTemplate: {
      icon: "",
      chipText: "",
      iconColor: "",
      textColor: "",
    },
    secondaryBtns: [],
    primaryBtn: {
      btnIcon: "",
      btnText: "",
      actionIcon: "",
    },
  },
};

export default function CustomCard(props) {
  return (
    <Box>
      <Card
        raised
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "17rem",
          height: props.content.secondaryBtns ? "26.5rem" : "24rem",
          margin: { xl: 2.5, lg: 2, md: 2, sm: 1.5, xs: 1 },
        }}
      >
        <CardMedia
          component="img"
          style={{ aspectRatio: 2 / 1.6 }}
          image={props.content?.image ? props.content.image : defaultImage}
          alt=""
        />
        <CardContent sx={{ paddingBottom: "0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              className="truncate"
              variant="h6"
              //   sx={{ fontSize: "1rem", fontWeight: 500 }}
              component="div"
            >
              {props.content?.heading}
            </Typography>
            {props.content.chipTemplate && (
              <Chip
                size="small"
                sx={{
                  color: props.content.chipTemplate.textColor,
                  textTransform: "uppercase",
                }}
                icon={
                  <SvgIcon
                    component={props.content.chipTemplate.icon}
                    sx={{
                      color: props.content.chipTemplate.iconColor
                        ? props.content.chipTemplate.iconColor
                        : props.content.chipTemplate.textColor,
                      fontSize: "0.7rem !important",
                    }}
                  />
                }
                label={props.content.chipTemplate.chipText}
              />
            )}
          </Box>

          <Typography
            variant="body2"
            className="event-line-clamp"
            color="text.secondary"
          >
            {props.content?.description}
          </Typography>
        </CardContent>
        {props.content.secondaryBtns && (
          <CardActions sx={{ marginTop: "auto" }}>
            {props.content.secondaryBtns.map((buttons, index) => {
              return (
                <Button
                  key={index}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={buttons.onClick}
                  sx={{ flex: 1, color: "primary.contrastText" }}
                  startIcon={buttons.icon}
                >
                  {buttons.btnText}
                </Button>
              );
            })}
          </CardActions>
        )}

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: props.content.secondaryBtns ? 0 : "auto",
            padding: "0.1rem 0.5rem",
          }}
        >
          <Button
            sx={{ color: "secondary.main" }}
            size="small"
            onClick={props.content.primaryBtn.onClick}
            startIcon={props.content.primaryBtn.btnIcon}
          >
            {props.content.primaryBtn.btnText}
          </Button>
          <IconButton aria-label="share">
            <SvgIcon component={props.content.actionIcon} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
