import React from 'react';
import Head from 'next/head';
import Tabs from '../components/tabs';

export default function Home(props) {
  const { ottawaWeather, moscowWeather, tokyoWeather } = props;

  return (
    <React.Fragment>
      <Tabs
        ottawaWeather={ottawaWeather}
        moscowWeather={moscowWeather}
        tokyoWeather={tokyoWeather}
      />
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  // Not exposing API key
  const apiKey = process.env.OPEN_WEATHER_API_KEY

  // Refactoring to fetch the data at build time
  const ottawaUrl =
    'https://api.openweathermap.org/data/2.5/forecast?lat=75.69&lon=10.99&appid=' +
    apiKey;
  const moscowUrl =
    'https://api.openweathermap.org/data/2.5/forecast?lat=55.75&lon=37.61&appid=' +
    apiKey;
  const tokyoUrl =
    'https://api.openweathermap.org/data/2.5/forecast?lat=35.67&lon=139.65&appid=' +
    apiKey;

  const [ottawaResponse, moscowResponse, tokyoResponse] = await Promise.all([
    fetch(ottawaUrl),
    fetch(moscowUrl),
    fetch(tokyoUrl)
  ]);

  const [ottawaData, moscowData, tokyoData] = await Promise.all([
    ottawaResponse.json(),
    moscowResponse.json(),
    tokyoResponse.json()
  ]);

  return {
    props: {
      ottawaWeather: ottawaData,
      moscowWeather: moscowData,
      tokyoWeather: tokyoData
    }
  };
}
