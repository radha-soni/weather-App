import React from "react";
import Paper from "@material-ui/core/Paper";
import "../components/weather.css";
export default function SearchBar() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <Paper elevation={3} className="search-container">
      <i className="fa fa-map-marker map fa-2x" aria-hidden="true"></i>
      <div>
        <input
          type="text"
          className="input-container"
          onChange={handleChange}
        />
      </div>

      <i className="fa fa-search search fa-2x" aria-hidden="true"></i>
    </Paper>
  );
}
