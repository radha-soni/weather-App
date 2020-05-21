import React from "react";
import "../components/weather.css";
export default function PerDayTemperatureTabs({ ip }) {
  if (ip) {
    console.log(ip);
  }
  return (
    <div className="temp-container">
      <div className="detail-container">
        <p>Fri</p>
        <p>28deg</p>
        <p>Sunny</p>
      </div>
    </div>
  );
}
