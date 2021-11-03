import React, { useState, useEffect } from "react";
import "./App.css";
import { getweather, Weathers } from "./api";
import key from "./login";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState<Weathers>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (weather === undefined) {
      lookUp("london");
    }
  }, [weather]);

  const lookUp = (place: string) => {
    getweather(place, key)
      .then((data) => {
        data.error ? console.log("ERROR:", data.error) : setWeather(data);
      })
      .catch((error) => {
        return Promise.reject();
      });
    console.log("lookup", weather);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <span className="searchBar">
          <input
            placeholder="Search bar"
            onKeyDown={(i: React.KeyboardEvent<HTMLInputElement>) => {
              setSearch(i.currentTarget.value);
              console.log(search);
            }}
          />
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              lookUp(search);
            }}
          >
            Go!
          </button>
        </span>

        {weather !== undefined && <WeatherCard weather={weather} />}

        {/* <div></div> */}
      </main>
    </div>
  );
}

export default App;
