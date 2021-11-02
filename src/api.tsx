const getweather = async (location: string, key: string) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;

  return await (await fetch(url)).json()

};

export default getweather;
