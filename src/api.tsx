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

export interface Citys {
  features: [
    {
      properties: {
        city: string;
        country: string;
      };
    }
  ];
}

export interface Weathers {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_dir: string;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_miles: number;
    uv: number;
  };
}
