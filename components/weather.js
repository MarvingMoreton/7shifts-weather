import { useState, useEffect } from 'react';
import React from 'react';
import classes from './weather.module.scss';
import Tabs from "./tabs"
import Image from 'next/image';
import Cloud from '../public/cloud.png';

export default function Weather() {
  const [ottawaWeather, setOttawaWeather] = useState(null);
  const [moscowWeather, setMoscowWeather] = useState(null);

  const OPEN_WEATHER_API_key = '2c701a18f96047c7f8f0980932225e89';
  // `https://api.openweathermap.org/data/2.5/weather?lat=75.69&lon=10.99&appid=2c701a18f96047c7f8f0980932225e89`

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
                  <span className={classes['degree']}> 19°</span>
                  <span>Clouds</span>
                </div>
              </div>
            </div>

            <div className={classes['row-2']}>
              <div className={classes['day-box']}>
                <h4> Wed</h4>
                <Image
                  src={Cloud}
                  alt="google logo"
                  width={70}
                  height={70}
                  className={classes['google-image']}
                />
                <span className={classes['degree']}> 18°</span>
              </div>
              <div className={classes['day-box']}>
                <h4> Wed</h4>
                <Image
                  src={Cloud}
                  alt="google logo"
                  width={70}
                  height={70}
                  className={classes['google-image']}
                />
                <span className={classes['degree']}> 18°</span>
              </div>
              <div className={classes['day-box']}>
                <h4> Wed</h4>
                <Image
                  src={Cloud}
                  alt="google logo"
                  width={70}
                  height={70}
                  className={classes['google-image']}
                />
                <span className={classes['degree']}> 18°</span>
              </div>
              <div className={classes['day-box']}>
                <h4> Wed</h4>
                <Image
                  src={Cloud}
                  alt="google logo"
                  width={70}
                  height={70}
                  className={classes['google-image']}
                />
                <span className={classes['degree']}> 18°</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}
