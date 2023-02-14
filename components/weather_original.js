import { useState, useEffect } from 'react';

export default function Weather() {
  const [ottawaWeather, setOttawaWeather] = useState(null);
  const [moscowWeather, setMoscowWeather] = useState(null);

  const OPEN_WEATHER_API_key = "2c701a18f96047c7f8f0980932225e89"
  `https://api.openweathermap.org/data/2.5/weather?lat=75.69&lon=10.99&appid=2c701a18f96047c7f8f0980932225e89`


  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  // `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&units=metric&appid=${OPEN_WEATHER_API_key}`

  useEffect(() => {
    async function fetchWeather() {
      const ottawaResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=75.69&lon=10.99&appid=${OPEN_WEATHER_API_key}`
      );
      const ottawaData = await ottawaResponse.json();
      setOttawaWeather(ottawaData);

      const moscowResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=${OPEN_WEATHER_API_key}`
      );
      const moscowData = await moscowResponse.json();
      setMoscowWeather(moscowData);
    }

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Current weather in Ottawa and Moscow</h1>
      {ottawaWeather && (
        <div>
          <h2>Ottawa</h2>
          <p>Temperature: {ottawaWeather.main.temp}°C</p>
          <p>Conditions: {ottawaWeather.weather[0].description}</p>
        </div>
      )}
      {moscowWeather && (
        <div>
          <h2>Moscow</h2>
          <p>Temperature: {moscowWeather.main.temp}°C</p>
          <p>Conditions: {moscowWeather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
