import { useState, useEffect } from 'react';
import React from 'react';
import classes from './weather.module.scss';
import Tabs from './tabs';
import Image from 'next/image';
import Cloud from '../public/cloud.png';

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

  // `https://api.openweathermap.org/data/2.5/weather?lat=75.69&lon=10.99&appid=2c701a18f96047c7f8f0980932225e89`

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  // `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&units=metric&appid=${OPEN_WEATHER_API_key}`

  useEffect(() => {
    async function fetchWeather() {
      // OTTAWA
      const ottawaResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=75.69&lon=10.99&appid=${OPEN_WEATHER_API_key}`
      );
      const ottawaData = await ottawaResponse.json();
      console.log(ottawaData);
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
      setTokyoWeather(tokyoData);

      setLoading(false);
    }

    fetchWeather();
  }, []);
  // console.log(ottawaWeather.list[0].main.temp);
  // console.log(ottawaWeather.list[0].main.temp);
  // console.log(kelvinToCelsius(ottawaWeather.list[0].main.temp));
  // console.log(ottawaWeather.list[0].main.temp);
  // console.log(ottawaWeatherweatherData.list[0].main.temp);

  if (loading) {
    return <div>Loading...</div>;
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
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={50}
                        height={50}
                        className={classes['google-image']}
                      />
                      <div className={classes['degree-status']}>
                        <span className={classes['degree']}>
                          {' '}
                          {kelvinToCelsius(ottawaWeather.list[0].main.temp)}°
                        </span>
                        <span>Clouds</span>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(ottawaWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
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
                        src={Cloud}
                        alt="google logo"
                        width={50}
                        height={50}
                        className={classes['google-image']}
                      />
                      <div className={classes['degree-status']}>
                        <span className={classes['degree']}>
                          {kelvinToCelsius(moscowWeather.list[0].main.temp)}°
                        </span>
                        <span>Clouds</span>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(moscowWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
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
                        src={Cloud}
                        alt="google logo"
                        width={50}
                        height={50}
                        className={classes['google-image']}
                      />
                      <div className={classes['degree-status']}>
                        <span className={classes['degree']}>
                          {' '}
                          {kelvinToCelsius(tokyoWeather.list[0].main.temp)}°
                        </span>
                        <span>Clouds</span>
                      </div>
                    </div>
                  </div>

                  <div className={classes['row-2']}>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[0]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[1].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[1]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[10].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[2]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
                        {kelvinToCelsius(tokyoWeather.list[18].main.temp)}°
                      </span>
                    </div>
                    <div className={classes['day-box']}>
                      <h4> {nextDays[3]}</h4>
                      <Image
                        src={Cloud}
                        alt="google logo"
                        width={70}
                        height={70}
                        className={classes['google-image']}
                      />
                      <span className={classes['degree']}>
                        {' '}
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
