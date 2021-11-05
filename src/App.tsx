import React, { useState, useEffect } from "react";
import "./App.css";
import { getweather, getsearches, Weathers, Citys } from "./api";
import { key, rKey } from "./login";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState<Weathers>();
  const [search, setSearch] = useState("");
  const [citySearch, setCitySearch] = useState<Citys>();

  useEffect(() => {
    if (weather === undefined) {
      lookUpWeather("london");
    }
    if (citySearch !== undefined) {
      citySearch.features.map((x) => {
        console.log(x.properties.city);
      });
    }
  }, [weather, citySearch]);

  const lookUpWeather = (place: string) => {
    getweather(place, key)
      .then((data) => {
        data.error ? console.log("ERROR:", data.error) : setWeather(data);
      })
      .catch((error) => {
        return Promise.reject();
      });
    console.log("lookup", weather);
  };

  const lookUpCity = async (place: string) => {
    getsearches(place, rKey)
      .then((data) => setCitySearch(data))
      .catch((error) => {
        return Promise.reject();
      });
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
              if (i.currentTarget.value.length > 2) {
                lookUpCity(i.currentTarget.value);
                setSearch(i.currentTarget.value);
              }
            }}
          />

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              lookUpWeather(search);
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
