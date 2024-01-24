'use client';

import React, { useEffect, useState } from 'react';
import Map from '@/components/search-result/map';
import { formatDate } from '@/utils/formatDate';
import { useAccommodationList } from '@/api/search-result/query';
import { MarkerProps } from '@/types/search-result/map/type';
import { useRecoilValue } from 'recoil';
import {
  regionIndex,
  rangeDate,
  roomIndex,
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/searchStates';
import { format } from 'date-fns';
import NoResults from '@/components/search-result/noResults';

const Page = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  const [searchParams, setSearchParams] = useState({
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

  const selectedRegion = useRecoilValue(regionIndex);
  const dateRange = useRecoilValue(rangeDate);
  const selectedType = useRecoilValue(roomIndex);
  const adultCount = useRecoilValue(adultCountState);
  const childCount = useRecoilValue(childCountState);

  //지역
  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      region: selectedRegion.join(','),
    }));
  }, [selectedRegion]);

  //체크인 범위
  useEffect(() => {
    const startDate = dateRange?.from ?? new Date();
    const endDate = dateRange?.to ?? new Date();

    setSearchParams((prev) => ({
      ...prev,
      checkInStart: format(startDate, 'yyyy-MM-dd'),
      checkInEnd: format(endDate, 'yyyy-MM-dd'),
    }));
  }, [dateRange]);

  //숙박 유형
  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      type: selectedType.join(','),
    }));
  }, [selectedType]);

  //인원 수
  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      pax: adultCount + childCount,
    }));
  }, [adultCount, childCount]);

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
      {accommodations && accommodations.length > 0 ? (
        <Map markers={markersData} />
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default Page;
