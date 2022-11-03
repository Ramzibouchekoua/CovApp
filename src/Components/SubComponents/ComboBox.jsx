import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";

function ComboBox({ Data, Label, handleChange, value, lengthTab }) {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        key={lengthTab || "combo-box-demo" + "-" + Label}
        options={Data}
        clearIcon={false}
        onChange={(event) =>
          handleChange(Label, event.target.innerText, lengthTab)
        }
        value={value?.label}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={Label} value={value?.label} />
        )}
      />
    </div>
  );
}

ComboBox.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
};
ComboBox.defaultProps = {
  data: ["No Data"],
  label: "text",
};

export default ComboBox;
