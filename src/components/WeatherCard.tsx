import React, { useState } from "react";
import { Weathers } from "../api";

const WeatherCard = ({ weather }: { weather: Weathers }) => {
  const [tempC, setTempC] = useState(true);

  return (
    <>
      <div className="weatherCard">
        <span>
          <h1>{weather.location.name}</h1>
          <h1>{weather.location.region}</h1>
          <h1>{weather.location.country}</h1>
        </span>
        <h2>{weather.location.localtime}</h2>
        <div>
          <section>
            <img
              src={weather.current.condition.icon}
              alt={"current weather icon"}
            />
            <h3>{weather.current.condition.text}</h3>
          </section>
          <aside>
            <h3>
              Temp: {tempC ? weather.current.temp_c : weather.current.temp_f}
              {tempC ? " C" : " F"}
            </h3>
            <h3>
              Feels like:{" "}
              {tempC
                ? weather.current.feelslike_c
                : weather.current.feelslike_f}
              {tempC ? " C" : " F"}
            </h3>
            <h3>💨 {weather.current.wind_mph} mph</h3>
            <h3>🧭 {weather.current.wind_dir}</h3>
            <h3>🌧️ {weather.current.precip_mm}</h3>
            <h3>☁️ {weather.current.cloud}</h3>
          </aside>
        </div>
      </div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTempC(!tempC)}
      >
        {tempC ? "Celsius" : "Fareinheit"}
      </button>
    </>
  );
};

export default WeatherCard;
