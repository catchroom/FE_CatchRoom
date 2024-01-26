'use client';
import AccommodationList from '@/components/search-result/list/accommodationList';
import ToggleViewButton from '@/components/search-result/toggleViewButton';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  regionIndex,
  rangeDate,
  roomIndex,
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/searchStates';
import { sortState } from '@/atoms/search-result/sortAtom';
import { accommodationsCountState } from '@/atoms/search-result/countAtom';
import { format } from 'date-fns';
import { formatDate } from '@/utils/formatDate';
import { useAccommodationList } from '@/api/search-result/query';
import NoResults from '@/components/search-result/noResults';

const Page = () => {
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

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
  const sortOption = useRecoilValue(sortState);
  const setAccommodationsCount = useSetRecoilState(accommodationsCountState);

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

  //정렬 타입
  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      filter: sortOption,
    }));
  }, [sortOption]);

  // 총 개수
  useEffect(() => {
    if (accommodations) {
      setAccommodationsCount(accommodations.length);
    }
  }, [accommodations, setAccommodationsCount]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const toggleView = () => {
    setCurrentView(currentView === 'list' ? 'map' : 'list');
  };

  return (
    <div className="w-full flex flex-col">
      {accommodations && accommodations.length > 0 ? (
        <AccommodationList accommodations={accommodations} />
      ) : (
        <NoResults />
      )}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[3]">
        <Link href="/search-result/map" passHref>
          <ToggleViewButton
            currentView={currentView}
            onViewChange={toggleView}
          />
        </Link>
      </div>
    </div>
  );
};

export default Page;
