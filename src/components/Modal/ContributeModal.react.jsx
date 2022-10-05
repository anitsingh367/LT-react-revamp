// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Import other packages
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  Radio,
  RadioGroup,
  OutlinedInput,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  MenuItem,
  Select,
  FormHelperText,
  InputAdornment,
  Autocomplete,
  TextField,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import { states as stateList } from "../../data/States";
import { cities as cityList } from "../../data/Cities";

import {
  emailValidation,
  numberValidation,
  nameValidation,
} from "../../validations/Validations.js";

ContributeModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  isNavbar: PropTypes.bool,
  projectHeading: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

ContributeModal.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  isNavbar: false,
  projectHeading: "",
};

//InputField styling

export default function ContributeModal(props) {
  //Handle Modal close
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    props.onClose(false);
    setOpen(false);
    resetData();
  };

  const initialFormState = {
    amount: "",
    panNumber: "",
    name: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    mob: "",
    email: "",
  };

  //Handle Form Data
  const [formData, setFormData] = useState(initialFormState);
  const handleForm = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  //Handle Amount Selection
  const [amount, setAmount] = useState("");
  const handleAmount = (event) => {
    setAmount(event.target.value);
    setFormData({ ...formData, amount: event.target.value });
  };

  //Handle Form Submit
  const handleSubmitForm = () => {
    props.onSubmit();
    handleClose();
    console.log(formData);
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

  //Update City list after selecting the state
  const newCityList = cityList.filter((items) => {
    return items.state.includes(formData?.state);
  });

  //Reset Data function to reset form inputs
  const resetData = () => {
    setAmount("");
    setFormData(initialFormState);
    setEmailValid(true);
    setNameValid(true);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <Dialog open={open}>
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
            {props.isNavbar
              ? "Contribute For The Cause"
              : `Contribute To ${
                  props.projectHeading ? props.projectHeading : "Project"
                }`}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <FormControl
          sx={{
            display: "flex",
          }}
        >
          <RadioGroup
            required
            row
            aria-labelledby="radio-buttons-group-label"
            defaultValue={""}
            name="radio-buttons-group"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: 1,
            }}
            onChange={handleAmount}
          >
            <FormControlLabel value="100" control={<Radio />} label="₹100" />
            <FormControlLabel value="500" control={<Radio />} label="₹500" />
            <FormControlLabel value="1000" control={<Radio />} label="₹1000" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other Amount"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="amount-input-box" required>
            Amount
          </InputLabel>
          <OutlinedInput
            required
            id="amount-input-box"
            value={formData.amount === "other" ? "" : formData.amount}
            onChange={handleForm("amount")}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
            type="number"
            inputProps={{ min: "0" }}
            onKeyPress={(e) => {
              if (numberValidation().test(e.key) === false) {
                e.preventDefault();
              }
            }}
            disabled={amount === "other" ? false : true}
            placeholder={amount === "" ? "Please select above options" : ""}
          />
          {parseInt(formData.amount) === 0 && (
            <FormHelperText error id="accountId-error">
              Please enter some amount
            </FormHelperText>
          )}
        </FormControl>
        {formData.amount > 5000 && (
          <FormControl>
            <InputLabel htmlFor="pan-card-details">
              Enter Pan Card No (Required if donation is above ₹ 5000)
            </InputLabel>
            <OutlinedInput
              id="pan-card-details"
              value={formData.panNumber?.toUpperCase()}
              onChange={handleForm("panNumber")}
              label="Enter Pan Card No (Required if donation is above ₹ 5000)"
              type="text"
              hidden={true}
              disabled={amount === "other" ? false : true}
              placeholder={amount === "" ? "Please select above options" : ""}
            />
          </FormControl>
        )}
        <FormControl>
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
        <FormControl>
          <InputLabel htmlFor="address-input-box" required>
            Address
          </InputLabel>
          <OutlinedInput
            required
            id="address-input-box"
            label="Address"
            onChange={handleForm("address")}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="state-select-label" required>
            State
          </InputLabel>
          <Select
            required
            labelId="state-select-label"
            id="state-select"
            value={formData.state}
            label="State"
            onChange={handleForm("state")}
          >
            {stateList?.map((list, index) => {
              return (
                <MenuItem key={index} value={list.name}>
                  {list.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", xs: "column" },
            gap: 1.5,
          }}
        >
          <FormControl sx={{ flex: 1 }}>
            <Autocomplete
              freeSolo
              onChange={(event, newValue) => {
                setFormData({ ...formData, city: newValue });
              }}
              onInputChange={(event, newInputValue) => {
                setFormData({ ...formData, city: newInputValue });
              }}
              disabled={formData.state === "" ? true : false}
              id="contribute-modal-city"
              options={newCityList.map((option) => option.label)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    formData.state === ""
                      ? "Please select the State first"
                      : "City"
                  }
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl
            sx={{
              flex: 1,
            }}
          >
            <InputLabel htmlFor="zip-input-box" required>
              Zip
            </InputLabel>
            <OutlinedInput
              required
              id="zip-input-box"
              label="Zip"
              type="text"
              onChange={handleForm("zip")}
            />
          </FormControl>
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", xs: "column" },
            gap: 1.5,
          }}
        >
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
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleSubmitForm}
          disabled={
            formData.amount === "" ||
            formData.amount === "other" ||
            formData.name === "" ||
            formData.address === "" ||
            formData.city === "" ||
            formData.state === "" ||
            formData.zip === "" ||
            formData.mob === "" ||
            formData.email === "" ||
            parseInt(formData.amount) === 0 ||
            (formData.amount > 5000 && formData.panNumber === "") ||
            !isEmailValid
              ? true
              : false
          }
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
