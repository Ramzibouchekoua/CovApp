import React, { useState } from "react";
import PropTypes from "prop-types";
import ComboBox from "./ComboBox";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ComboBoxIntermidiateCity({
  valueIntermidite,
  setValueIntermidiate,
  Data,
  handleChange,
}) {
  const addInput = () => {
    const tempArray = [...valueIntermidite];
    tempArray.push({});
    setValueIntermidiate(tempArray);
  };
  async function deleteInput(index) {
    const array = valueIntermidite.filter((_, i) => i !== index);
    await setValueIntermidiate([]);

    setValueIntermidiate(array);
  }

  return (
    <div className="intermidiate-city">
      {valueIntermidite?.map((item, index) => {
        return (
          <div className="intermidiate-city-fields">
            <ComboBox
              value={item}
              lengthTab={index}
              Data={Data}
              Label={"Intermidiate city"}
              valueIntermidite={valueIntermidite}
              setValueIntermidiate={setValueIntermidiate}
              handleChange={handleChange}
            />
            <Button
              color="error"
              variant="outlined"
              onClick={() => deleteInput(index)}
            >
              <DeleteIcon />
            </Button>
          </div>
        );
      })}

      <Button variant="outlined" onClick={addInput}>
        Add Intermidiate City
      </Button>
    </div>
  );
}

ComboBoxIntermidiateCity.propTypes = {};

export default ComboBoxIntermidiateCity;
