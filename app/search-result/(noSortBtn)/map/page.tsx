'use client';

import React, { useEffect, useState } from 'react';
import Map from '@/components/search-result/map';
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
import NoResults from '@/components/search-result/noResults';
import { format, addYears } from 'date-fns';

const Page = () => {
  const selectedRegion = useRecoilValue(regionIndex);
  const dateRange = useRecoilValue(rangeDate);
  const selectedType = useRecoilValue(roomIndex);
  const adultCount = useRecoilValue(adultCountState);
  const childCount = useRecoilValue(childCountState);

  const tenYearsLater = addYears(new Date(), 10);
  const [searchParams, setSearchParams] = useState({
    region: selectedRegion.join(',') === '' ? 'all' : selectedRegion.join(','),
    checkInStart: dateRange?.from
      ? format(new Date(dateRange.from), 'yyyy-MM-dd')
      : format(new Date(), 'yyyy-MM-dd'),
    checkInEnd: dateRange?.to
      ? format(new Date(dateRange.to), 'yyyy-MM-dd')
      : format(tenYearsLater, 'yyyy-MM-dd'),
    type: selectedType.join(',') === '' ? '0,1,2,3,4' : selectedType.join(','),
    pax: adultCount + childCount,
    filter: 'HIGH_DISCOUNT',
    pageParam: 1,
  });

  const {
    data: accommodations,
    isLoading,
    error,
  } = useAccommodationList(
    searchParams.checkInStart,
    searchParams.checkInEnd,
    searchParams.type,
    searchParams.region,
    searchParams.pax,
    searchParams.filter,
    searchParams.pageParam,
  );
  //지역
  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      region:
        selectedRegion.join(',') === '' ? 'all' : selectedRegion.join(','),
    }));
  }, [selectedRegion]);

  //체크인 범위
  useEffect(() => {
    const startDate = dateRange?.from ? new Date(dateRange.from) : new Date();
    const endDate = dateRange?.to
      ? new Date(dateRange.to)
      : addYears(new Date(), 10);

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
      type:
        selectedType.join(',') === '' ? '0,1,2,3,4' : selectedType.join(','),
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

  const markersData =
    accommodations?.map((accommodation: MarkerProps) => ({
      key: accommodation.productId,
      productId: accommodation.productId,
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
    })) || [];

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
