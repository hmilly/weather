export const getweather = async (location: string, key: string) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;

  return await (await fetch(url)).json();
};

export const getsearches = async (location: string, key: string) => {
  const url = ``;

  return await (await fetch(url)).json();
};

export interface Weathers {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}
