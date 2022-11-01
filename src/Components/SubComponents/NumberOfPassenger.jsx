import React from "react";
import { TextField } from "@mui/material";
import { useSnackbar } from "notistack";

function NumberOfPassenger({ numberPassenger, setNumberPassenger, setSubmit }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleChange = (newValue) => {
    const numberRegex = /^[0-9]*$/;
    if (!numberRegex.test(newValue)) {
      enqueueSnackbar("Number of passenger should be number");
      setSubmit(false);
    } else if (newValue < 1) {
      enqueueSnackbar("Number of passenger should be greater than 0");
      setSubmit(false);
    } else {
      setNumberPassenger(newValue);
      setSubmit(true);
    }
  };
  return (
    <>
      <TextField
        label="Number of passengers"
        name="numberformat"
        id="formatted-numberformat-input"
        variant="outlined"
        sx={{ width: 300 }}
        onChange={(newValue) => handleChange(newValue.target.value)}
      />
    </>
  );
}

export default NumberOfPassenger;
