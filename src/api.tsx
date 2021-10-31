import key from "./login.js"

const getweather = async (location: string): Promise<string | void> => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`;
  await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export default { getweather };
