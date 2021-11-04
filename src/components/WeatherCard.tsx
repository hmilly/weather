import React, { useState } from "react";
import { Weathers } from "../api";

const WeatherCard = ({ weather }: { weather: Weathers }) => {
  const [tempC, setTempC] = useState(true);

  return (
    <>
      <div className="weatherCard">
        <aside>
          <h3>{weather.location.name}</h3>
          <h3>{weather.location.region}</h3>
          <h3>{weather.location.country}</h3>
          <h3>
            {weather.location.localtime.slice(10)}{" "}
            {weather.location.localtime
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-")}
          </h3>
        </aside>
        <span>
          <img
            src={weather.current.condition.icon}
            alt={"current weather icon"}
          />
          <h3>{weather.current.condition.text}</h3>
        </span>
        <div>
          <h3>
            Temp: {tempC ? weather.current.temp_c : weather.current.temp_f}
            {tempC ? " C" : " F"}
          </h3>
          <h3>
            Feels like:{" "}
            {tempC ? weather.current.feelslike_c : weather.current.feelslike_f}
            {tempC ? " C" : " F"}
          </h3>
          <h3>uv: {weather.current.uv}</h3>
          <h3>🧭 {weather.current.wind_dir}</h3>
          <h3>💨 {weather.current.wind_mph} mph</h3>
          <h3>☁️ {weather.current.cloud}</h3>
          <h3>🌧️ {weather.current.precip_mm}%</h3>
          <h3>mph: {weather.current.vis_miles}</h3>
          <h3>humidity: {weather.current.humidity}</h3>
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
