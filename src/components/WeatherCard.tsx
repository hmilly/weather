import { useState } from "react";
import { Weathers } from "../Interface";

const WeatherCard = ({ weather }: { weather: Weathers }) => {
  const [tempC, setTempC] = useState(true);

  return (
    <>
      <div className="weatherCard">
        <section>
          <p>{weather.location.name}</p>
          <p>{weather.location.region}</p>
          <p>{weather.location.country}</p>
          <p>
            {weather.location.localtime.slice(10)}{" "}
            {weather.location.localtime
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-")}
          </p>
        </section>
        <section>
          <img
            src={weather.current.condition.icon}
            alt={"current weather icon"}
          />
          <p>{weather.current.condition.text}</p>
        </section>
        <div>
          <p>
            Temp:
            <br></br>
            {tempC ? weather.current.temp_c : weather.current.temp_f}
            {tempC ? " C" : " F"}
          </p>
          <p>
            💨:
            <br></br>
            {weather.current.wind_mph} mph
          </p>
          <p>
            🌧️:
            <br></br>
            {weather.current.precip_mm}%
          </p>
          <p>
            Feels like:
            <br></br>
            {tempC ? weather.current.feelslike_c : weather.current.feelslike_f}
            {tempC ? " C" : " F"}
          </p>
          <p>
            🧭:
            <br></br>
            {weather.current.wind_dir}
          </p>
          <p>
            uv:
            <br></br>
            {weather.current.uv}
          </p>
          <p>
            humidity:
            <br></br>
            {weather.current.humidity}
          </p>
          <p>
            mph:
            <br></br>
            {weather.current.vis_miles}
          </p>
          <p>
            ☁️:
            <br></br>
            {weather.current.cloud}
          </p>
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
