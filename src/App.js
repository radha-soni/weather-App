import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PerDayTemperatureTabs from "./components/PerDayTemperatureTabs";
import ForeCastChart from "./components/ForeCastChart";

function App() {
  const [ip, setIp] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios.get("http://ip-api.com/json").then((res) => {
      const response = res.data;
      setIp(response);
    });
  }, []);
  useEffect(() => {
    console.log(ip);
    if (ip) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${ip.lat}&lon=${ip.lon}&units=metric&exclude=minutely&appid=897cfb18331a69e1c93cf7e1507dbe5a`
        )
        .then((res) => {
          console.log(res.data);
          const response = res.data;
          setTemperature(response);
        });
    }
  }, [ip]);
  return (
    <div className="App">
      <SearchBar />
      <PerDayTemperatureTabs temperature={temperature} />
      <ForeCastChart temperature={temperature} />
    </div>
  );
}

export default App;
