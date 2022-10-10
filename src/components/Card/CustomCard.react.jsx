// Import npm packages

import PropTypes from "prop-types";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
  SvgIcon,
  IconButton
} from "@mui/material";

import defaultImage from "../../assets/default-card-image.jpg";

CustomCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  content: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    chipTemplate: PropTypes.shape({
      icon: PropTypes.object,
      chipText: PropTypes.string,
      iconColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
    secondaryBtns: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object,
        btnText: PropTypes.string,
        onClick: PropTypes.func,
      })
    ),
    primaryBtn: PropTypes.shape({
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
    },
    actionIcon: "",
  },
};

export default function CustomCard(props) {
  return (
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={props.content?.image ? props.content.image : defaultImage}
        sx={{ aspectRatio: "2 / 1.6" }}
        alt=""
      />
      <CardContent sx={{ paddingBottom: "0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography className="truncate" variant="h6" component="div">
            {props.content?.heading}
          </Typography>
          {props.content.chipTemplate && (
            <Chip
              size="small"
              sx={{
                color: `${props.content.chipTemplate.textColor} !important`,
                textTransform: "uppercase",
              }}
              icon={
                props.content.chipTemplate.icon && (
                  <SvgIcon
                    component={props.content.chipTemplate.icon}
                    sx={{
                      color: props.content.chipTemplate.iconColor
                        ? `${props.content.chipTemplate.iconColor} !important`
                        : `${props.content.chipTemplate.textColor} !important`,
                      fontSize: "0.7rem !important",
                    }}
                  />
                )
              }
              label={props.content.chipTemplate.chipText}
            />
          )}
        </Box>

        <Typography
          className="event-line-clamp"
          variant="body2"
          color="text.secondary"
        >
          {props.content?.description}
        </Typography>
      </CardContent>
      {props.content?.secondaryBtns && (
        <CardActions sx={{ marginTop: "auto" }}>
          {props.content?.secondaryBtns?.map((buttons, index) => {
            return (
              <Button
                key={index}
                size="small"
                variant="contained"
                color="primary"
                onClick={buttons.onClick}
                sx={{ flex: 1, color: "primary.contrastText" }}
                startIcon={buttons.icon && <SvgIcon component={buttons.icon} />}
              >
                {buttons.btnText}
              </Button>
            );
          })}
        </CardActions>
      )}

      {props.content?.primaryBtn && (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: props.content?.secondaryBtns ? 0 : "auto",
            padding: "0.1rem 0.5rem",
          }}
        >
          <Button
            sx={{ color: "secondary.main" }}
            size="small"
            onClick={props.content.primaryBtn?.onClick}
            startIcon={
              props.content.primaryBtn?.btnIcon && (
                <SvgIcon component={props.content.primaryBtn.btnIcon} />
              )
            }
          >
            {props.content?.primaryBtn?.btnText}
          </Button>
          {props.content.actionIcon && (
            <IconButton>
              <SvgIcon component={props.content?.actionIcon} />
            </IconButton>
          )}
        </CardActions>
      )}
    </Card>
  );
}
