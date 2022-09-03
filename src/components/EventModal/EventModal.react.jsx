// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddressMap from "../AddressMap/AddressMap.react";
import {
  emailValidation,
  numberValidation,
  nameValidation,
} from "../../validations/Validations";

import { toast } from "react-toastify";

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
} from "@mui/material";
import YoutubeFrame from "../YoutubeFrame/YoutubeFrame.react";

EventModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  heading: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(["upcoming", "live", "finished"]),
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props.onClose(false);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const initialFormState = {
    name: "",
    contact: "",
    email: "",
    noOfAttendies: "",
    reference: "",
  };

  //Handle Form Data
  const [formData, setFormData] = useState(initialFormState);
  const handleForm = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  //Handle Email Validation
  const [isEmailValid, setEmailValid] = useState(true);
  const handleEmail = (e) => {
    if (!e.target.value || emailValidation().test(e.target.value) === false) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setFormData({ ...formData, email: e.target.value });
    }
  };
  const [isNameValid, setNameValid] = useState(true);
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
    toast.success("Thanks For Your Response", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log(formData);
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
        {(props.status === "upcoming" || props.status === "live") && (
          <List>
            <ListItem>
              <ListItemText
                primary={props.heading}
                secondary={props.description}
              />
            </ListItem>
            <Divider />
            <Container
              sx={{
                display: "flex",
                gap: 2,
                margin: "10px auto",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },

                justifyContent: "center",
              }}
            >
              {props.status === "upcoming" ? <AddressMap /> : <YoutubeFrame />}
              <FormGroup style={{ flex: 1, margin: "0 10px", gap: 12 }}>
                <FormControl>
                  <InputLabel htmlFor="name" required>
                    Name
                  </InputLabel>
                  <OutlinedInput id="name" label="Name" onChange={handleName} />
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
                    type="tel"
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
                      flex: 1,
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
                <FormControlLabel control={<Checkbox defaultChecked />}>
                  I aggree to the Terms & Conditions
                </FormControlLabel>
                <Button
                  variant="contained"
                  onClick={handleSubmitForm}
                  disabled={
                    formData.name === "" ||
                    formData.contact === "" ||
                    formData.email === "" ||
                    formData.noOfAttendies === "" ||
                    formData.reference === "" ||
                    !isEmailValid
                      ? true
                      : false
                  }
                >
                  Register
                </Button>
              </FormGroup>
            </Container>
          </List>
        )}
      </Dialog>
    </div>
  );
}
