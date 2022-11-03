import React from "react";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <AirportShuttleIcon />
        <span>CovApp</span>
      </Link>
    </div>
  );
}

export default Header;
