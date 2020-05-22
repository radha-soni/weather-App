import React from "react";
import "../components/weather.css";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
export default function ForeCastChart({ temperature }) {
  if (temperature) {
    console.log(temperature);
  }
  const data = {
    labels: ["10 am", "11 am", "12 am", "13 am", "14 am"],
    datasets: [
      {
        data: [21, 22, 24, 42, 15, 30],
        borderColor: "#2196f3",
        borderWidth: 2,
        strokeColor: "gradient",
        backgroundColor: "rgba(0, 0, 0, 0)",
        radius: 5,
      },
    ],
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  };

  return (
    <Paper className="forecast-container" elevation={3}>
      <div className="img-container">
        {temperature && <h1>{Math.round(temperature.current.temp)}&#8451;</h1>}

        <img
          src={require("../assets/svg/sun.svg")}
          alt="sun"
          className="sun-img"
        />
      </div>
      <div>
        <Line data={data} width={100} height={200} options={data.options} />
      </div>

      <div className="weather-conditions">
        {temperature && (
          <div className="conditions">
            <p className="condition-common">Pressure</p>
            <p className="condition-specific">
              {temperature.current.pressure}&nbsp;hpa
            </p>
          </div>
        )}
        {temperature && (
          <div className="conditions">
            <p className="condition-common">Humidity</p>
            <p className="condition-specific">
              {temperature.current.humidity}&nbsp;%
            </p>
          </div>
        )}
      </div>
    </Paper>
  );
}
