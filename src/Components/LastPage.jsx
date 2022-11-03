import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fakeBackEnd } from "./calcul";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";

function LastPage() {
  const navigate = useLocation();
  const [tripInformation, setTripInformation] = useState(
    navigate.state?.tripInformation
  );

  const arr = fakeBackEnd(
    navigate.state?.originCity,
    navigate.state?.cityDestination,
    navigate.state?.valueIntermidite
  );

  return (
    <div className="lastpage">
      <div className="container">
        {navigate.state ? (
          <>
            {" "}
            {arr?.map((el, key) => (
              <>
                {key < arr.length - 1 && (
                  <div className="distance-components">
                    <span className="city bold">{el.label}</span>
                    <span> to </span>
                    <span className="city bold"> {arr[key + 1]?.label} </span>
                    <span className="bold">
                      {Math.round(arr[key + 1]?.distance) + "Km"}
                    </span>
                  </div>
                )}
              </>
            ))}
            <div className="total-distance">
              <span className="bold">Total</span>
              <span className="bold">
                {Math.round(
                  arr.reduce(
                    (total, item) =>
                      total + (item?.distance ? item?.distance : 0),
                    0
                  )
                ) + "Km"}
              </span>
            </div>
            <div className="trip-information">
              <span>
                <CalendarMonthIcon />
                {tripInformation.Date}
              </span>
              <span>
                <AirlineSeatReclineNormalIcon /> {tripInformation.Number}
              </span>
            </div>
            <Button variant="outlined">
              <Link to="/">Back to form</Link>
            </Button>
          </>
        ) : (
          <>
            <span className="warning-information">No data available </span>
            <Button variant="outlined">
              <Link to="/">Back to form</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default LastPage;
