export const fetchWeather = async (location: string, key: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const fetchSearches = async (location: string, key: string) => {
  return await fetch(
    `https://spott.p.rapidapi.com/places/autocomplete?limit=5&skip=0&q=${location}&type=CITY`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "spott.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
