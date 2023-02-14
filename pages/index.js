import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Weather from '../components/weather';
import Tabs from '../components/tabs';

export default function Home() {
  return (
    <React.Fragment>
      {/* <Weather /> */}

      <Tabs />
    </React.Fragment>
  );
}
