import { useState, useEffect } from 'react';
import React from 'react';
import classes from './weather.module.scss';
import Image from 'next/image';

// Function to go from Kelv measure to Celcius
function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  const roundedCelsius = Math.round(celsius);
  return roundedCelsius;
}

// Function to automatically get the next days (up to five day)
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

export default function Weather(props) {
  const { ottawaWeather, moscowWeather, tokyoWeather } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const nextDays = nextFiveDays();
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
                      <div className={classes['row-1--img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            ottawaWeather.list[0].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={120}
                          height={120}
                          className={classes.icon}
                        />
                      </div>
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

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            ottawaWeather.list[1].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(ottawaWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            ottawaWeather.list[10].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(ottawaWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            ottawaWeather.list[18].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(ottawaWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            ottawaWeather.list[26].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>

                      <span className={classes['degrees']}>
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
                      <div className={classes['row-1--img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            moscowWeather.list[0].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={120}
                          height={120}
                          className={classes.icon}
                        />
                      </div>
                      <div className={classes['status-box']}>
                        <span className={classes['degrees']}>
                          {kelvinToCelsius(moscowWeather.list[0].main.temp)}°
                        </span>
                        <h3>{moscowWeather.list[0].weather[0].main}</h3>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0].slice(0, 3)}</h4>

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            moscowWeather.list[1].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(moscowWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            moscowWeather.list[10].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(moscowWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            moscowWeather.list[18].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(moscowWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            moscowWeather.list[26].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
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
                      <div className={classes['row-1--img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            tokyoWeather.list[0].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={120}
                          height={120}
                          className={classes.icon}
                        />
                      </div>

                      <div className={classes['status-box']}>
                        <span className={classes['degrees']}>
                          {kelvinToCelsius(tokyoWeather.list[0].main.temp)}°
                        </span>
                        <h3>{tokyoWeather.list[0].weather[0].main}</h3>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            tokyoWeather.list[1].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1].slice(0, 3)}</h4>

                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            tokyoWeather.list[10].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>

                      <span className={classes['degrees']}>
                        {kelvinToCelsius(tokyoWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            tokyoWeather.list[18].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>
                      <span className={classes['degrees']}>
                        {kelvinToCelsius(tokyoWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3].slice(0, 3)}</h4>
                      <div className={classes['img-box']}>
                        <Image
                          src={`${getWeatherIcon(
                            tokyoWeather.list[26].weather[0].main
                          )}.svg`}
                          alt="weather icon"
                          width={54}
                          height={54}
                          className={classes.icon}
                        />
                      </div>

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
