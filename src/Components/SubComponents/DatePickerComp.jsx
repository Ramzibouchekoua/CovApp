import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DatePickerComp({ dateTrip, setDateTrip, tomorrowMoment }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of trip"
        value={dateTrip}
        onChange={(newValue) => setDateTrip(newValue)}
        renderInput={(params) => <TextField {...params} />}
        sx={{ width: 300 }}
        minDate={tomorrowMoment}
      />
    </LocalizationProvider>
  );
}

DatePickerComp.propTypes = {};

export default DatePickerComp;
