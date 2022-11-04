import { useState } from "react";
import { Weathers } from "../Interface";

const WeatherCard = ({ weather }: { weather: Weathers }) => {
  const [tempC, setTempC] = useState(true);

  const setDirection = (dir: string) => {
    switch (dir) {
      case "W":
        return "West";
      case "S":
        return "South";
      case "E":
        return "East";
      default:
        return "North";
    }
  };

  const setUv = (no: number) => {
    if (no <= 2) return "Low";
    else if (no > 5 && no <= 7) return "High";
    else if (no > 7 && no <= 10) return "Very High";
    else if (no > 10) return "Extreme";
    else return "Moderate";
  };

  return (
    <>
      <div className="weatherCard">
        <section>
          <p>{weather?.location?.name}</p>
          <p>{weather?.location?.region}</p>
          <p>{weather?.location?.country}</p>
          <p>
            {weather?.location?.localtime.slice(10)}{" "}
            {weather?.location?.localtime
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-")}
          </p>
        </section>
        <section>
          <img
            src={weather?.current?.condition?.icon}
            alt={"current weather icon"}
          />
          <p>{weather?.current?.condition?.text}</p>
        </section>
        <div>
          <p>
            Temp:
            <br></br>
            {tempC ? weather?.current?.temp_c : weather?.current?.temp_f}
            {tempC ? " C" : " F"}
          </p>
          <p>
            Wind:
            <br></br>
            💨 {weather?.current?.wind_mph} mph
          </p>
          <p>
            Rain:
            <br></br>
            🌧️ {weather?.current?.precip_mm} mm
          </p>
          <p>
            Feels like:
            <br></br>
            {tempC ? weather?.current?.feelslike_c : weather?.current?.feelslike_f}
            {tempC ? " C" : " F"}
          </p>
          <p>
            Direction:
            <br></br>
            {setDirection(weather?.current?.wind_dir)} 🧭
          </p>
          <p>
            UV:
            <br></br>
            {setUv(weather?.current?.uv)}
          </p>
          <p>
            Humidity:
            <br></br>
            {weather?.current?.humidity} %
          </p>
          <p>
            Visibility:
            <br></br>
            {weather?.current?.vis_miles} miles
          </p>
          <p>
            ☁️ cover:
            <br></br>
            {weather?.current?.cloud} %
          </p>
        </div>
      </div>
      <button
        className="temp-btn"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => setTempC(!tempC)}
      >
        <p>{tempC ? "Fahrenheit" : "Celsius"}</p>
      </button>
    </>
  );
};

export default WeatherCard;
