import { useState, useEffect } from "react";
import "./styles/app.scss";
import { fetchWeather, fetchSearches } from "./fetch";
import { Weathers, Citys } from "./Interface";
import WeatherCard from "./components/WeatherCard";
import SearchResults from "./components/SearchResults";
import offlineData from "./data/offlineData.json";

function App() {
  const [weather, setWeather] = useState<Weathers>(offlineData[0]);
  const [locationInput, setLocationInput] = useState("");
  const [citySearch, setCitySearch] = useState<Citys>(null);

  const searchKey = process.env.REACT_APP_SEARCH_KEY;
  const weatherKey = process.env.REACT_APP_WEATHER_KEY;

  // on input value above 2 letters, show searches
  useEffect(() => {
    if (locationInput.length > 2 && !locationInput.includes(",")) {
      fetchSearches(locationInput, searchKey).then((data) =>
        setCitySearch(data)
      );
    } else {
      setCitySearch(null);
    }
  }, [locationInput, searchKey]);

  return (
    <div className="App">
      <header>
        <h1>Weather</h1>
      </header>
      <main>
        <span className="searchBar">
          <input
            placeholder="Enter a city"
            value={locationInput}
            onChange={(i: React.ChangeEvent<HTMLInputElement>) =>
              setLocationInput(i.currentTarget.value)
            }
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
            <p>Go!</p>
          </button>
          {citySearch !== null && (
            <ul>
              {citySearch.features?.map((cityObj) => (
                <SearchResults
                  location={cityObj.properties}
                  setLocationInput={setLocationInput}
                  setCitySearch={setCitySearch}
                />
              ))}
            </ul>
          )}
        </span>
        <WeatherCard weather={weather} />
      </main>
    </div>
  );
}

export default App;
