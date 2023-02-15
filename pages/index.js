import React from 'react';
import Head from 'next/head';
import Tabs from '../components/tabs';

export default function Home(props) {
  const { ottawaWeather, moscowWeather, tokyoWeather  } = props;

  return (
    <React.Fragment>
      <Tabs ottawaWeather = {ottawaWeather} moscowWeather={moscowWeather} tokyoWeather={tokyoWeather}/>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  // Refactoring to fetch the data at build time
  const OPEN_WEATHER_API_key = '2c701a18f96047c7f8f0980932225e89';

  const ottawaUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=75.69&lon=10.99&appid=' + OPEN_WEATHER_API_key;
  const moscowUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=55.75&lon=37.61&appid=' + OPEN_WEATHER_API_key;
  const tokyoUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.67&lon=139.65&appid=' + OPEN_WEATHER_API_key;

  const [ottawaResponse, moscowResponse, tokyoResponse] = await Promise.all([
    fetch(ottawaUrl),
    fetch(moscowUrl),
    fetch(tokyoUrl),
  ]);

  const [ottawaData, moscowData, tokyoData] = await Promise.all([
    ottawaResponse.json(),
    moscowResponse.json(),
    tokyoResponse.json(),
  ]);


  return {
    props: {
      ottawaWeather: ottawaData,
      moscowWeather: moscowData,
      tokyoWeather: tokyoData,
    },
  };
}
