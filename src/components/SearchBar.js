import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "../components/weather.css";
export default function SearchBar() {
  const [matchedCities, setMatchedCities] = useState(null);
  function handleChange(e) {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&types=(cities)&key=AIzaSyDLVAQGDRbMuStEzYk7Y8057QY-X0pstXk`
      )
      .then((res) => {
        console.log(res);
        setMatchedCities(res);
      });
  }
  return (
    <Paper elevation={3} className="search-container">
      <i className="fa fa-map-marker map fa-2x" aria-hidden="true"></i>
      <div>
        <input
          id="autocomplete"
          type="text"
          className="input-container"
          onChange={handleChange}
        />
      </div>
      {matchedCities &&
        matchedCities.map((city) => {
          return (
            <div>
              <li>{city}</li>
            </div>
          );
        })}

      <i className="fa fa-search search fa-2x" aria-hidden="true"></i>
    </Paper>
  );
}
