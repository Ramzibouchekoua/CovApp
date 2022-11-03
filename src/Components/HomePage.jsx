import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ComboBox from "./SubComponents/ComboBox";
import DatePickerComp from "./SubComponents/DatePickerComp";
import NumberOfPassenger from "./SubComponents/NumberOfPassenger";
import ComboBoxIntermidiateCity from "./SubComponents/ComboBoxIntermidiateCity";
import { calcul } from "./calcul";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import moment from "moment";

function HomePage() {
  const todayMoment = moment();
  const tomorrowMoment = todayMoment.clone().add(1, "days");
  const [originCity, setOriginCity] = useState();
  const [cityDestination, setCityDestination] = useState();
  const [dateTrip, setDateTrip] = useState(tomorrowMoment);
  const [numberPassenger, setNumberPassenger] = useState();
  const [valueIntermidite, setValueIntermidiate] = useState([]);
  const [tripInformation, setTripInformation] = useState();
  const [submit, setSubmit] = useState(false);
  const history = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const dataFrance = [
    ["Paris", 48.856614, 2.352222],

    ["Marseille", 43.296482, 5.36978],

    ["Lyon", 45.764043, 4.835659],

    ["Toulouse", 43.604652, 1.444209],

    ["Nice", 43.710173, 7.261953],

    ["Nantes", 47.218371, -1.553621],

    ["Strasbourg", 48.573405, 7.752111],

    ["Montpellier", 43.610769, 3.876716],

    ["Bordeaux", 44.837789, -0.57918],

    ["Lille", 50.62925, 3.057256],

    ["Rennes", 48.117266, -1.677793],

    ["Reims", 49.258329, 4.031696],

    ["Le Havre", 49.49437, 0.107929],

    ["Saint-Étienne", 45.439695, 4.387178],

    ["Toulon", 43.124228, 5.928],

    ["Angers", 47.478419, -0.563166],

    ["Grenoble", 45.188529, 5.724524],

    ["Dijon", 47.322047, 5.04148],

    ["Nîmes", 43.836699, 4.360054],

    ["Aix-en-Provence", 43.529742, 5.447427],
  ];
  const newArray = dataFrance.map((data) => {
    const body = {
      label: data[0],
      lat: data[1],
      lng: data[2],
    };
    return body;
  });

  useEffect(() => {
    calcul(originCity, cityDestination, valueIntermidite);
  }, [originCity, cityDestination]);
  useEffect(() => {
    const obj = {
      Date: dateTrip.format("MM/DD/YYYY"),
      Number: numberPassenger,
    };
    setTripInformation(obj);
  }, [numberPassenger, dateTrip]);
  useEffect(() => {
    setSubmit(false);
    validationForm();
  }, [numberPassenger, originCity, cityDestination, valueIntermidite]);

  const handleChange = (Label, newValue, index) => {
    switch (Label) {
      case "Origin city":
        setOriginCity(newArray.find((item) => item.label == newValue));
        break;
      case "City of destination":
        setCityDestination(newArray.find((item) => item.label == newValue));
        break;
      default:
        const tempArray = [...valueIntermidite];
        tempArray[index] = newArray.find((item) => item.label == newValue);

        setValueIntermidiate(tempArray);
    }
  };
  const validationForm = () => {
    if (!originCity) {
      enqueueSnackbar("Origin City is Required", "success");
      setSubmit(false);
    } else if (!cityDestination) {
      enqueueSnackbar("Destination city is Required");
      setSubmit(false);
    } else if (!dateTrip) {
      enqueueSnackbar("Date of the trip is Required");
      setSubmit(false);
    } else if (!numberPassenger) {
      enqueueSnackbar("Number of Passenger is Required");
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };
  const submitForm = () => {
    history("/LastPage", {
      state: {
        originCity,
        cityDestination,
        valueIntermidite,
        tripInformation,
      },
    });
  };
  return (
    <div className="homepage">
      <div className="container">
        <span className="introduction">Welcome to CovApp</span>
        <span>Please fill the form</span>
        <ComboBox
          Data={newArray}
          Label={"Origin city"}
          originCity={originCity}
          setOriginCity={setOriginCity}
          handleChange={handleChange}
        />
        <ComboBoxIntermidiateCity
          valueIntermidite={valueIntermidite}
          setValueIntermidiate={setValueIntermidiate}
          Data={newArray}
          handleChange={handleChange}
        />
        <ComboBox
          Data={newArray}
          Label={"City of destination"}
          cityDestination={cityDestination}
          setCityDestination={setCityDestination}
          handleChange={handleChange}
        />
        <NumberOfPassenger
          numberPassenger={numberPassenger}
          setNumberPassenger={setNumberPassenger}
          setSubmit={setSubmit}
        />
        <DatePickerComp
          dateTrip={dateTrip}
          setDateTrip={setDateTrip}
          tomorrowMoment={tomorrowMoment}
        />
        <Button
          variant="outlined"
          color="success"
          sx={{ width: 250 }}
          disabled={submit === true ? false : true}
          onClick={() => submitForm()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
