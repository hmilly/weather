import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import { fetchWeather, fetchSearches, Weathers, Citys } from "./api";
import { key, rKey } from "./login";
import WeatherCard from "./components/WeatherCard";
import SearchResults from "./components/SearchResults";

function App() {
  const [weather, setWeather] = useState<Weathers>();
  const [search, setSearch] = useState("");
  const [citySearch, setCitySearch] = useState<Citys>();

  useEffect(() => {
    if (weather === undefined)
      fetchWeather("london", key).then((data) => setWeather(data));

    search.length > 2
      ? fetchSearches(search, rKey).then((data) => setCitySearch(data))
      : setCitySearch(undefined);
  }, [weather, search]);

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <span className="searchBar">
          <input
            placeholder="Enter a city name"
            value={search}
            onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(i.currentTarget.value);
            }}
          />
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              fetchWeather(search, key).then((data) => setWeather(data));
              setSearch("");
            }}
          >
            Go!
          </button>
          {citySearch !== undefined ? (
            <ul>
              {citySearch.features.map((cityObj, i) => (
                console.log(cityObj.properties)
                // <SearchResults
                //   key={i}
                //   result={cityObj.properties}
                //   setSearch={setSearch}
                // />
              ))}
            </ul>
          ) : (
            <></>
          )}
        </span>
        {weather !== undefined ? <WeatherCard weather={weather} /> : <></>}
      </main>
    </div>
  );
}

export default App;
