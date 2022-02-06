import { useState, useEffect } from "react";
import "./styles/app.scss";
import { fetchWeather, fetchSearches } from "./api";
import { Weathers, Citys } from "./Interface";
import { weatherKey, searchKey } from "./login";
import WeatherCard from "./components/WeatherCard";
import SearchResults from "./components/SearchResults";

function App() {
  const [weather, setWeather] = useState<Weathers>();
  const [locationInput, setLocationInput] = useState("");
  const [citySearch, setCitySearch] = useState<Citys>();

  // initial mount
  useEffect(() => {
    fetchWeather("london", weatherKey).then((data) => setWeather(data));
  }, []);

  // on input value above 2 letters, show searches, or clear form
  useEffect(() => {
    locationInput.length > 2
      ? fetchSearches(locationInput, searchKey).then((data) =>
          setCitySearch(data)
        )
      : setCitySearch(undefined);
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
