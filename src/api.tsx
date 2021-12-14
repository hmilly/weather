export const fetchWeather = async (location: string, key: string) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;
  return await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const fetchSearches = async (location: string, key: string) => {
  const url =
    `https://geoapify-address-autocomplete.p.rapidapi.com/v1/geocode/` +
    `autocomplete?text=${location}&type=city`;
  return await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "geoapify-address-autocomplete.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
