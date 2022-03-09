import { useState, useEffect } from "react";
import "./styles/app.scss";
import { fetchWeather, fetchSearches } from "./api";
import { Weathers, Citys } from "./Interface";
import { weatherKey, searchKey } from "./login";
import WeatherCard from "./components/WeatherCard";
import SearchResults from "./components/SearchResults";
import data from "./data/data.json";

function App() {
  const [weather, setWeather] = useState<Weathers>();
  const [locationInput, setLocationInput] = useState("");
  const [citySearch, setCitySearch] = useState<Citys>();

  // initial mount from internal db
  useEffect(() => {
    setWeather(data[0]);
  }, []);

  // on input value above 2 letters, show searches, or clear form
  // ** depending if login key is loaded **
  useEffect(() => {
    if (locationInput.length > 2) {
      if (searchKey.length !== 0)
        fetchSearches(locationInput, searchKey).then((data) =>
          setCitySearch(data)
        );
    } else {
      setCitySearch(undefined);
    }
  }, [locationInput]);

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <span className="searchBar">
          <input
            placeholder="Enter a city name"
            value={locationInput}
            onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
              setLocationInput(i.currentTarget.value);
            }}
          />
          <button
            disabled={locationInput.length > 2 ? false : true}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              // ** depending if login key is loaded **
              if (weatherKey.length !== 0)
                fetchWeather(locationInput, weatherKey).then((data) =>
                  setWeather(data)
                );
              setLocationInput("");
            }}
          >
            Go!
          </button>
          {citySearch !== undefined ? (
            <ul>
              {citySearch.features.map((cityObj) => (
                <SearchResults
                  location={cityObj.properties}
                  setLocationInput={setLocationInput}
                />
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
