import { useState, useEffect } from 'react';
import React from 'react';
import classes from './weather.module.scss';
import Tabs from './tabs';
import Image from 'next/image';

// From kelv to Celcius
function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  const roundedCelsius = Math.round(celsius);
  return roundedCelsius;
}

// Automatically know the next days (up to five day)
function nextFiveDays() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const today = new Date().getDay(); // Get the current day of the week (0-6)
  const nextFiveDays = [];

  for (let i = 1; i <= 5; i++) {
    const nextDay = (today + i) % 7; // Calculate the day coming after today (wrap around to Sunday if needed)
    nextFiveDays.push(daysOfWeek[nextDay]);
  }

  return nextFiveDays;
}

export default function Weather() {
  const OPEN_WEATHER_API_key = '2c701a18f96047c7f8f0980932225e89';

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [ottawaWeather, setOttawaWeather] = useState(null);
  const [moscowWeather, setMoscowWeather] = useState(null);
  const [tokyoWeather, setTokyoWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  const nextDays = nextFiveDays();

  useEffect(() => {
    async function fetchWeather() {
      // OTTAWA
      const ottawaResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=75.69&lon=10.99&appid=${OPEN_WEATHER_API_key}`
      );
      const ottawaData = await ottawaResponse.json();
      // console.log(ottawaData);
      setOttawaWeather(ottawaData);

      // MOSCOW
      const moscowResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=55.75&lon=37.61&appid=${OPEN_WEATHER_API_key}`
      );
      const moscowData = await moscowResponse.json();
      setMoscowWeather(moscowData);

      // TOKYO
      const tokyoResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=35.67&lon=139.65&appid=${OPEN_WEATHER_API_key}`
      );
      const tokyoData = await tokyoResponse.json();
      console.log(tokyoData);

      setTokyoWeather(tokyoData);

      setLoading(false);
    }

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const weatherIcon = {
    drizzle: 'rain',
    thunderstorm: 'thunderstorm',
    rain: 'rain',
    snow: 'snowflake',
    clear: 'clear',
    clouds: 'clouds',
    mist: 'smog',
    smoke: 'smog',
    haze: 'smog',
    dust: 'smog',
    fog: 'smog',
    sand: 'smog',
    ash: 'smog',
    squall: 'wind',
    tornado: 'tornado'
  };

  const weatherType = [
    'drizzle',
    'thunderstorm',
    'rain',
    'snow',
    'clear',
    'clouds',
    'mist',
    'smoke',
    'haze',
    'dust',
    'fog',
    'sand',
    'ash',
    'squall',
    'tornado'
  ];

  function getWeatherIcon(weather) {
    const lowercaseWeather = weather.toLowerCase();

    for (let i = 0; i < weatherType.length; i++) {
      const lowercaseType = weatherType[i].toLowerCase();

      if (lowercaseWeather.includes(lowercaseType)) {
        return weatherIcon[lowercaseType];
      }
    }

    return null;
  }

  console.log('weather type:');

  console.log(getWeatherIcon(ottawaWeather.list[0].weather[0].main));
  return (
    <div className={classes['tab-container']}>
      <div className={classes['tab-sections']}>
        <h2
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleTabClick(0)}
        >
          OTTAWA
        </h2>
        <h2
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          MOSCOW
        </h2>
        <h2
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          TOKYO
        </h2>
      </div>
      <div className={classes['tab-content']}>
        {activeTab === 0 && (
          <React.Fragment>
            <section className={classes['weather-section']}>
              <section>
                <div className={classes['tab-grid']}>
                  <div className={classes['row-1']}>
                    <h3>Today</h3>
                    <div className={classes['weather-box']}>
                      <Image
                        src={`${getWeatherIcon(
                          ottawaWeather.list[0].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={100}
                        height={100}
                        className={classes.icon}
                      />

                      <div className={classes['status-box']}>
                        <span className={classes['degrees']}>
                          {kelvinToCelsius(ottawaWeather.list[0].main.temp)}°
                        </span>
                        <h3>{ottawaWeather.list[0].weather[0].main}</h3>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4>{nextDays[0].slice(0, 3)}</h4>

                      <Image
                        src={`${getWeatherIcon(
                          ottawaWeather.list[1].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {kelvinToCelsius(ottawaWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          ottawaWeather.list[10].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          ottawaWeather.list[18].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          ottawaWeather.list[26].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[26].main.temp)}°
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </React.Fragment>
        )}
        {activeTab === 1 && (
          <React.Fragment>
            <section className={classes['weather-section']}>
              <section>
                <div className={classes['tab-grid']}>
                  <div className={classes['row-1']}>
                    <h3>Today</h3>
                    <div className={classes['weather-box']}>
                      <Image
                        src={`${getWeatherIcon(
                          moscowWeather.list[0].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={100}
                        height={100}
                        className={classes.icon}
                      />

                      <div className={classes['status-box']}>
                        <span className={classes['degrees']}>
                          {kelvinToCelsius(moscowWeather.list[0].main.temp)}°
                        </span>
                        <h3>Clouds</h3>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          moscowWeather.list[1].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />
                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          moscowWeather.list[10].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {kelvinToCelsius(moscowWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          moscowWeather.list[18].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          moscowWeather.list[26].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[26].main.temp)}°
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </React.Fragment>
        )}
        {activeTab === 2 && (
          <React.Fragment>
            <section className={classes['weather-section']}>
              <section>
                <div className={classes['tab-grid']}>
                  <div className={classes['row-1']}>
                    <h3>Today</h3>
                    <div className={classes['weather-box']}>
                      <Image
                        src={`${getWeatherIcon(
                          tokyoWeather.list[0].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={100}
                        height={100}
                        className={classes.icon}
                      />

                      <div className={classes['status-box']}>
                        <span className={classes['degrees']}>
                          {kelvinToCelsius(tokyoWeather.list[0].main.temp)}°
                        </span>
                        <h3>Clouds</h3>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          tokyoWeather.list[1].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          tokyoWeather.list[10].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          tokyoWeather.list[18].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />
                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>
                      <Image
                        src={`${getWeatherIcon(
                          tokyoWeather.list[26].weather[0].main
                        )}.svg`}
                        alt="weather icon"
                        width={54}
                        height={54}
                        className={classes.icon}
                      />

                      <span className={classes['degrees']}>
                        {kelvinToCelsius(tokyoWeather.list[26].main.temp)}°
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
