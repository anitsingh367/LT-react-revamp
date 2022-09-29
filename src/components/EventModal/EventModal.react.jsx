// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Container,
  FormControl,
  Radio,
  RadioGroup,
  OutlinedInput,
  FormControlLabel,
  Dialog,
  InputLabel,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemText,
  FormGroup,
  FormLabel,
  FormHelperText,
  Checkbox,
  Slide,
  Box,
} from "@mui/material";
import {
  Close as CloseIcon,
  VolunteerActivism as Thanks,
} from "@mui/icons-material";

import CustomSnackBar from "../SnackBar/CustomSnackBar.react";

import {
  emailValidation,
  numberValidation,
  nameValidation,
} from "../../validations/Validations";

import YoutubeFrame from "../YoutubeFrame/YoutubeFrame.react";
import AddressMap from "../AddressMap/AddressMap.react";

EventModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  heading: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(["upcoming", "live", "finished",""]), //Added empty string for warnings handling
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
};

EventModal.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventModal(props) {
  const initialFormState = {
    name: "",
    contact: "",
    email: "",
    noOfAttendies: "",
    reference: "",
  };

  const [open, setOpen] = React.useState(props.isOpen);
  const [checked, setChecked] = useState(false);
  const [isToasterOpen, setIsToasterOpen] = useState(false);
  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [formData, setFormData] = useState(initialFormState);

  const handleClose = () => {
    props.onClose(false);
    setOpen(false);
    setFormData(initialFormState);
    setChecked(false)
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  //Handle Form Data
  const handleForm = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  //Handle Email Validation
  const handleEmail = (e) => {
    if (!e.target.value || emailValidation().test(e.target.value) === false) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setFormData({ ...formData, email: e.target.value });
    }
  };

   //Handle Name
  const handleName = (e) => {
    if (!e.target.value || nameValidation().test(e.target.value) === false) {
      setNameValid(false);
    } else {
      setNameValid(true);
      setFormData({ ...formData, name: e.target.value });
    }
  };

  //Handle Form Submit
  const handleSubmitForm = () => {
    setIsToasterOpen(true);
    console.log(formData);
  };

    //Handle Checkbox
  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Event Details
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText
              primary={props.heading}
              secondary={props.description}
            />
          </ListItem>
          <Divider />
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              gap: 3,
              marginTop: 2,
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.status === "upcoming" ? <AddressMap /> : <YoutubeFrame />}
            {(props.status === "live" || props.status === "upcoming") &&
              !isToasterOpen && (
                <FormGroup
                  sx={{
                    flex: 1,
                    justifyContent: "space-between",
                    gap: { md: "1rem", sm: "1rem", xs: "1rem" },
                  }}
                >
                  <FormControl>
                    <InputLabel htmlFor="name" required>
                      Name
                    </InputLabel>
                    <OutlinedInput
                      id="name"
                      type="text"
                      label="Name"
                      onChange={handleName}
                    />
                    {!isNameValid && (
                      <FormHelperText error id="name-error">
                        Please enter valid name
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="email" required>
                      Email
                    </InputLabel>
                    <OutlinedInput
                      id="email"
                      label="Email"
                      type="email"
                      onChange={handleEmail}
                    />
                    {!isEmailValid && (
                      <FormHelperText error id="email-error">
                        Please enter valid email
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="contact-number" required>
                      Contact Number
                    </InputLabel>
                    <OutlinedInput
                      id="contact-number"
                      label="Contact Number"
                      type="tel"
                      onChange={handleForm("contact")}
                      onKeyPress={(e) => {
                        if (numberValidation().test(e.key) === false) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="number-of-attendies" required>
                      Number of Attendies
                    </InputLabel>
                    <OutlinedInput
                      id="number-of-attendies"
                      label="Number of Attendies"
                      type="number"
                      onChange={handleForm("noOfAttendies")}
                      onKeyPress={(e) => {
                        if (numberValidation().test(e.key) === false) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      display: "flex",
                    }}
                  >
                    <FormLabel
                      id="radio-buttons-group-event-register-label"
                      required
                    >
                      How did you get to know about the event?
                    </FormLabel>
                    <RadioGroup
                      required
                      row
                      aria-labelledby="radio-buttons-group-event-register-label"
                      defaultValue={""}
                      name="radio-buttons-group-event-register"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                      onChange={handleForm("reference")}
                    >
                      <FormControlLabel
                        value="Whatsapp"
                        control={<Radio />}
                        label="Whatsapp"
                      />
                      <FormControlLabel
                        value="Facebook"
                        control={<Radio />}
                        label="Facebook"
                      />
                      <FormControlLabel
                        value="Youtube"
                        control={<Radio />}
                        label="Youtube"
                      />
                      <FormControlLabel
                        value="Website"
                        control={<Radio />}
                        label="Website"
                      />
                      <FormControlLabel
                        value="Family"
                        control={<Radio />}
                        label="Friends/ Family"
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox id="t_and_c" checked={checked} onChange={handleCheckbox} />
                    }
                    label={
                      <label htmlFor={"t_and_c"}>
                        I agree to the <a href="/">Terms & Conditions</a>
                      </label>
                    }
                  />
                  <Button
                    variant="contained"
                    onClick={handleSubmitForm}
                    disabled={
                      formData.name === "" ||
                      formData.contact === "" ||
                      formData.email === "" ||
                      formData.noOfAttendies === "" ||
                      formData.reference === "" ||
                      !checked ||
                      !isEmailValid
                        ? true
                        : false
                    }
                  >
                    Register
                  </Button>
                </FormGroup>
              )}
            {isToasterOpen && (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CustomSnackBar
                  animation="zoom"
                  iconColor="var(--primary-color)"
                  textColor="var(--primary-color)"
                  backgroundColor="var(--primary-color-light)"
                  icon={Thanks}
                  message="Thanks !! it means a lot to us"
                  closeMessage="Okay"
                  onClose={(value) => {
                    setOpen(value);
                    props.onClose(value);
                    setIsToasterOpen(value);
                    setFormData(initialFormState);
                  }}
                />
              </Box>
            )}
          </Container>
        </List>
      </Dialog>
    </div>
  );
}
