import React from "react";
import "../components/weather.css";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
export default function ForeCastChart() {
  const data = {
    labels: ["10 am", "11 am", "12 am", "13 am", "14 am"],
    datasets: [
      {
        data: [21, 22, 24, 42, 15, 30],
        borderColor: "#2196f3",
        borderWidth: 2,
      },
    ],
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  };

  return (
    <Paper className="forecast-container" elevation={3}>
      <div>
        <h1>26 &#8451;</h1>
        <img src={require("../assets/svg/sun.svg")} alt="sun" />
      </div>
      <div>
        <Line data={data} width={100} height={200} options={data.options} />
      </div>

      <div className="weather-conditions">
        <div className="conditions">
          <p>Pressure</p>
          <p>1013 hpa</p>
        </div>
        <div className="conditions">
          <p>Humidity</p>
          <p>93%</p>
        </div>
      </div>
    </Paper>
  );
}
