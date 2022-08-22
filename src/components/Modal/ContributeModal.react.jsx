// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { emailValidation } from "../../validations/Validations.js";

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
  DialogTitle,
  MenuItem,
  Select,
  FormHelperText,
  InputAdornment,
  Autocomplete,
  TextField,
} from "@mui/material";

import { states as stateList } from "./States.js";
import { cities as cityList } from "./Cities.js";
import { toast } from "react-toastify";

ContributeModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

ContributeModal.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  isOpen: false,
};

//InputField styling
const inputStyle = {
  margin: "0.5rem 0",
};

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
    city: "",
    zip: "",
    state: "",
    mob: "",
    email: "",
  };

  //Handl Form Data
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
    toast("Thanks for your response");
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

  const newCityList = cityList.filter((items) => {
    return items.state.includes(formData?.state);
  });

  const resetData = () => {
    setAmount("");
    setFormData(initialFormState);
    setEmailValid(true);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div>
      <div>
        <Dialog open={open}>
          <DialogTitle>Contribute</DialogTitle>
          <DialogContent>
            <FormControl
              sx={{
                display: "flex",
              }}
            >
              <RadioGroup
                required
                fullWidth
                aria-labelledby="radio-buttons-group-label"
                defaultValue={""}
                name="radio-buttons-group"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
                onChange={handleAmount}
              >
                <FormControlLabel
                  value="100"
                  control={<Radio />}
                  label="₹100"
                />
                <FormControlLabel
                  value="500"
                  control={<Radio />}
                  label="₹500"
                />
                <FormControlLabel
                  value="1000"
                  control={<Radio />}
                  label="₹1000"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other Amount"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={inputStyle}>
              <InputLabel htmlFor="amount-input-box" required>
                Amount
              </InputLabel>
              <OutlinedInput
                required
                id="amount-input-box"
                value={formData.amount === "other" ? "" : formData.amount}
                onChange={handleForm("amount")}
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Amount"
                type="number"
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
              <FormControl fullWidth sx={inputStyle}>
                <InputLabel htmlFor="pan-card-details">
                  Enter Pan Card No (Required if donation is above ₹ 5000)
                </InputLabel>
                <OutlinedInput
                  id="pan-card-details"
                  value={formData.panNumber}
                  onChange={handleForm("panNumber")}
                  label="Enter Pan Card No (Required if donation is above ₹ 5000)"
                  type="text"
                  hidden={true}
                  disabled={amount === "other" ? false : true}
                  placeholder={
                    amount === "" ? "Please select above options" : ""
                  }
                />
              </FormControl>
            )}
            <FormControl fullWidth sx={inputStyle}>
              <InputLabel htmlFor="name-input-box" required>
                Name
              </InputLabel>
              <OutlinedInput
                required
                id="name-input-box"
                label="Name"
                onChange={handleForm("name")}
              />
              {/* {!isName && (
                <FormHelperText error id="email-error">
                  Please enter valid name
                </FormHelperText>
              )} */}
            </FormControl>
            <FormControl fullWidth sx={inputStyle}>
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
            <FormControl fullWidth sx={inputStyle}>
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
              }}
            >
              <FormControl sx={{ flex: 1, ...inputStyle }}>
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
                          ? "Please Select the state first"
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
                  ...inputStyle,
                  marginLeft: { lg: 1, md: 1, xs: 0 },
                }}
              >
                <InputLabel htmlFor="zip-input-box" required>
                  Zip
                </InputLabel>
                <OutlinedInput
                  required
                  id="zip-input-box"
                  label="Zip"
                  type="number"
                  onChange={handleForm("zip")}
                />
              </FormControl>
            </FormGroup>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
              }}
            >
              <FormControl sx={{ flex: 1, ...inputStyle }}>
                <InputLabel htmlFor="mobile-input-box" required>
                  Mobile
                </InputLabel>
                <OutlinedInput
                  required
                  id="mobile-input-box"
                  label="Mobile"
                  type="number"
                  onChange={handleForm("mob")}
                />
              </FormControl>
              <FormControl
                sx={{
                  flex: 1,
                  ...inputStyle,
                  marginLeft: { lg: 1, md: 1, xs: 0 },
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
      </div>
    </div>
  );
}
