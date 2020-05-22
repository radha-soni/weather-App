import React from "react";
import "../components/weather.css";
export default function PerDayTemperatureTabs({ temperature }) {
  return (
    <div className="temp-container">
      {temperature &&
        temperature.daily.map((temp) => (
          <div className="detail-container" key={temp.dt}>
            <p>Fri</p>
            <p>
              {temp.temp.max}&#8451;&nbsp;
              <span className="min-temp"> {temp.temp.min}&#8451;</span>
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}
            />
            <p style={{ color: "#a09999" }}>{temp.weather[0].description}</p>
          </div>
        ))}
    </div>
  );
}
