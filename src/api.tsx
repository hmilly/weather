export const getweather = async (location: string, key: string) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;

  return await (await fetch(url)).json();
};

export const getsearches = async (location: string, key: string) => {
  return await (
    await fetch(
      `https://geoapify-address-autocomplete.p.rapidapi.com/v1/geocode/autocomplete?` +
        `text=${location}&type=city`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "geoapify-address-autocomplete.p.rapidapi.com",
          "x-rapidapi-key": key,
        },
      }
    )
  ).json();
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
