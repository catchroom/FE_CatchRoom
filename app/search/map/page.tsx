'use client';

import React from 'react';
import Map from '@/components/search/map';

const markersData = [
  {
    latitude: 33.4853707,
    longitude: 126.4815713,
    price: 100000,
    discountRate: 50,
    catchType: true,
  },
  {
    latitude: 33.4851906703734,
    longitude: 126.48851314849429,
    price: 1200000,
    discountRate: 20,
    catchType: true,
  },
];

const page = () => {
  return (
    <>
      <Map markers={markersData} />
    </>
  );
};

export default page;
