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

export interface City  {
  id: string;
  name: string;
  country: {
    name: string;
  };
  adminDivision1: {
    name: string;
  };
  adminDivision2: {
    name: string;
  };
}

//{
// features: [
//   {
//     properties: {
//       city: string;
//       county: string;
//       country: string;
//       place_id: string;
//     };
//   }
// ];
// }
