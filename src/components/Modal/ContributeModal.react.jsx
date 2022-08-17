// Import npm packages
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import InputAdornment from "@mui/material/InputAdornment";

import { states as stateList } from "./States.js";

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

const inputStyle = {
  margin: "0.5rem 0",
};

export default function ContributeModal(props) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    mob: "",
    email: "",
  });

  //Handle Modal close
  const handleClose = () => {
    props.onClose(false);
    setAmount("");
    setOpen(false);
    setFormData({
      amount: "",
      name: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      mob: "",
      email: "",
    });
  };

  //Set form data into state
  const handleForm = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const [amount, setAmount] = useState("");

  const handleAmount = (event) => {
    setAmount(event.target.value);
    setFormData({ ...formData, amount: event.target.value });
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const handleSubmitForm = () => {
    alert(
      "You have successfully sent ₹" +
        formData.amount +
        " to Rohit Dhende. You got scammed LOL"
    );
    console.log(formData);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contribute</DialogTitle>
        <DialogContent>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "sace-betweenp",
              alignItems: "flex-start",
            }}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
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
              <FormControlLabel value="100" control={<Radio />} label="₹100" />
              <FormControlLabel value="500" control={<Radio />} label="₹500" />
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
            <InputLabel htmlFor="amount-input-box">Amount</InputLabel>
            <OutlinedInput
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
          </FormControl>
          <FormControl fullWidth sx={inputStyle}>
            <InputLabel htmlFor="name-input-box">Name</InputLabel>
            <OutlinedInput
              id="name-input-box"
              label="Name"
              onChange={handleForm("name")}
            />
          </FormControl>
          <FormControl fullWidth sx={inputStyle}>
            <InputLabel htmlFor="address-input-box">Address</InputLabel>
            <OutlinedInput
              id="address-input-box"
              label="Address"
              onChange={handleForm("address")}
            />
          </FormControl>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", xs: "column" },
            }}
          >
            <FormControl sx={{ flex: 1, ...inputStyle }}>
              <InputLabel htmlFor="city-input-box">City</InputLabel>
              <OutlinedInput
                id="city-input-box"
                label="City"
                type="text"
                onChange={handleForm("city")}
              />
            </FormControl>

            <FormControl
              sx={{
                flex: 1,
                ...inputStyle,
                marginLeft: { lg: 1, md: 1, xs: 0 },
              }}
            >
              <InputLabel htmlFor="zip-input-box">Zip</InputLabel>
              <OutlinedInput
                id="zip-input-box"
                label="Zip"
                type="number"
                onChange={handleForm("zip")}
              />
            </FormControl>
          </FormGroup>
          <FormControl fullWidth sx={inputStyle}>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={formData.state}
              label="State"
              onChange={handleForm("state")}
            >
              {stateList.map((list, index) => {
                return (
                  <MenuItem key={index} value={list.key}>
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
              <InputLabel htmlFor="component-outlined">Mobile</InputLabel>
              <OutlinedInput
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
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="email-input-box"
                label="Email"
                type="email"
                onChange={handleForm("email")}
              />
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
              formData.email === ""
                ? true
                : false
            }
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
