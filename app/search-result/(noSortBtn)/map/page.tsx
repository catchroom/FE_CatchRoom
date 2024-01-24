'use client';

import React, { useState } from 'react';
import Map from '@/components/search-result/map';
import { formatDate } from '@/utils/formatDate';
import { useAccommodationList } from '@/api/search-result/query';
import { MarkerProps } from '@/types/search-result/map/type';

const Page = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  const [searchParams] = useState({
    region: 'all',
    checkInStart: formatDate(today),
    checkInEnd: formatDate(tomorrow),
    type: '0,1,2,3,4',
    pax: 0,
    filter: 'HIGH_DISCOUNT',
    pageNumber: 1,
  });

  const {
    data: accommodations,
    isLoading,
    error,
  } = useAccommodationList(searchParams);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const markersData = accommodations.map((accommodation: MarkerProps) => ({
    key: accommodation.productId,
    latitude: accommodation.latitude,
    longitude: accommodation.longitude,
    sellPrice: accommodation.sellPrice,
    discountRate: accommodation.discountRate,
    catchType: accommodation.catchType,
    originalPrice: accommodation.originalPrice,
    image: accommodation.image,
    accommodationName: accommodation.accommodationName,
    roomName: accommodation.roomName,
    checkIn: accommodation.checkIn,
    checkOut: accommodation.checkOut,
  }));

  return (
    <>
      <Map markers={markersData} />
    </>
  );
};

export default Page;
