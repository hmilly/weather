import React, { useState } from "react";
import { Weathers } from "../api";

const WeatherCard = ({ weather }: { weather: Weathers }) => {
  const [tempC, setTempC] = useState(true);

  return (
    <>
      <div className="weatherCard">
        <aside>
          <h2>{weather.location.name}</h2>
          <h2>{weather.location.region}</h2>
          <h2>{weather.location.country}</h2>
          <h2>
            {weather.location.localtime.slice(10)}{" "}
            {weather.location.localtime
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-")}
          </h2>
        </aside>
        <section>
          <img
            src={weather.current.condition.icon}
            alt={"current weather icon"}
          />
          <h2>{weather.current.condition.text}</h2>
        </section>
        <div>
          <h2>
            Temp: {tempC ? weather.current.temp_c : weather.current.temp_f}
            {tempC ? " C" : " F"}
          </h2>
          <h2>💨 {weather.current.wind_mph} mph</h2>
          <h2>🌧️ {weather.current.precip_mm}%</h2>
          <h2>
            Feels like:{" "}
            {tempC ? weather.current.feelslike_c : weather.current.feelslike_f}
            {tempC ? " C" : " F"}
          </h2>
          <h2>🧭 {weather.current.wind_dir}</h2>
          <h2>uv: {weather.current.uv}</h2>
          <h2>humidity: {weather.current.humidity}</h2>
          <h2>mph: {weather.current.vis_miles}</h2>
          <h2>☁️ {weather.current.cloud}</h2>
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
