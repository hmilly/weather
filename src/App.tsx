import React, { useState, useEffect } from "react";
import "./App.css";
import getweather from "./api";
import key from "./login";

const egObj = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    tz_id: "Europe/London",
    localtime: "2021-10-29 22:09",
  },
  current: {
    last_updated: "2021-10-29 21:00",
    temp_c: 10.0,
    temp_f: 50.0,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 160,
    wind_dir: "SSE",
    pressure_mb: 1000.0,
    pressure_in: 29.53,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 82,
    cloud: 75,
    feelslike_c: 8.0,
    feelslike_f: 46.4,
    uv: 1.0,
    gust_mph: 13.9,
    gust_kph: 22.3,
  },
};

function App() {
  const [weather, setWeather] = useState<object>({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("ran");
    getweather("london", key).then((data) => setWeather(data));

    console.log(weather);
  }, [search]);

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <input
          placeholder="Search bar"
          onKeyDown={(i: React.KeyboardEvent<HTMLInputElement>) => {
            setSearch(i.currentTarget.value);
            console.log(search);
          }}
        ></input>
        <div>
          <span>
            <h1>{egObj.location.region}</h1>
            <h2>{egObj.location.localtime}</h2>
          </span>

          <section>
            <img
              src={egObj.current.condition.icon}
              alt={"current weather icon"}
            ></img>
            <aside>
              <h1>{egObj.current.temp_c} c</h1>
              <h1>Feels like: {egObj.current.feelslike_c} c</h1>
              <h1>💨 {egObj.current.wind_mph} mph</h1>
              <h1>🧭 {egObj.current.wind_dir}</h1>
            </aside>
          </section>

          <h1>{egObj.current.condition.text}</h1>
        </div>

        {/* <div></div> */}
      </main>
    </div>
  );
}

export default App;
