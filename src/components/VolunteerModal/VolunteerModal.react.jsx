// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  emailValidation,
  numberValidation,
  nameValidation,
} from "../../validations/Validations.js";

// Import other packages
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Dialog,
  DialogActions,
  DialogContent,
  FormHelperText,
  Box,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
} from "@mui/material";
import {
  Close as CloseIcon,
  VolunteerActivism as Thanks,
} from "@mui/icons-material";

import CustomSnackBar from "../SnackBar/CustomSnackBar.react";

VolunteerModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  projectHeading: PropTypes.string,
};

export default function VolunteerModal(props) {
  //Handle Modal close
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    props.onClose(false);
    setOpen(false);
    resetData();
  };

  const initialFormState = {
    name: "",
    mob: "",
    email: "",
    position: "",
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
    formData.project = props.projectHeading
      ? props.projectHeading
      : "Not Project Specific";
    setIsToasterOpen(true);
    console.log(formData);
  };

  //Reset Data function to reset form inputs
  const resetData = () => {
    setFormData(initialFormState);
    setEmailValid(true);
    setNameValid(true);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const [isToasterOpen, setIsToasterOpen] = useState(false);
  return (
    props.isOpen && (
      <Dialog open={open}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setIsToasterOpen(false);
                handleClose();
                setFormData(initialFormState);
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Become a Volunteer
              {props.projectHeading ? " for " + props.projectHeading : ""}
            </Typography>
          </Toolbar>
        </AppBar>

        {!isToasterOpen && (
          <>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                minWidth: {
                  lg: "25rem",
                  md: "25rem",
                  sm: "20rem",
                  xs: "20rem",
                },
              }}
            >
              <FormControl sx={{ marginTop: "0.5rem" }}>
                <InputLabel htmlFor="name-input-box" required>
                  Name
                </InputLabel>
                <OutlinedInput
                  required
                  id="name-input-box"
                  label="Name"
                  onChange={handleName}
                />
                {!isNameValid && (
                  <FormHelperText error id="name-error">
                    Please enter valid name
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <InputLabel htmlFor="mobile-input-box" required>
                  Mobile
                </InputLabel>
                <OutlinedInput
                  required
                  id="mobile-input-box"
                  label="Mobile"
                  type="tel"
                  onChange={handleForm("mob")}
                  onKeyPress={(e) => {
                    if (numberValidation().test(e.key) === false) {
                      e.preventDefault();
                    }
                  }}
                />
              </FormControl>
              <FormControl
                sx={{
                  flex: 1,
                }}
              >
                <InputLabel htmlFor="email-input-box" required>
                  Email
                </InputLabel>
                <OutlinedInput
                  required
                  id="email-input-box"
                  label="Email"
                  type="email"
                  onChange={handleEmail}
                />
                {!isEmailValid && (
                  <FormHelperText error id="email-error">
                    Please enter valid email address
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                sx={{
                  flex: 1,
                }}
              >
                <InputLabel htmlFor="position-input-box" required>
                  How can you help us?
                </InputLabel>
                <OutlinedInput
                  required
                  id="position-input-box"
                  label="How can you help us?"
                  type="text"
                  onChange={handleForm("position")}
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleSubmitForm}
                disabled={
                  formData.name === "" ||
                  formData.mob === "" ||
                  formData.email === "" ||
                  formData.position === ""
                }
              >
                Submit
              </Button>
            </DialogActions>
          </>
        )}
        {isToasterOpen && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              minWidth: { lg: "25rem", md: "25rem", sm: "20rem", xs: "20rem" },
            }}
          >
            <CustomSnackBar
              animation="zoom"
              iconColor="var(--primary-color)"
              textColor="var(--primary-color)"
              icon={Thanks}
              message="Thank you for your interest, we will contact you soon"
              closeMessage="Okay"
              onClose={(value) => {
                setIsToasterOpen(value);
                handleClose();
                setFormData(initialFormState);
              }}
            />
          </Box>
        )}
      </Dialog>
    )
  );
}
