'use client';
import AccommodationList from '@/components/search-result/list/accommodationList';
import ToggleViewButton from '@/components/search-result/toggleViewButton';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  regionIndex,
  rangeDate,
  roomIndex,
  adultCountState,
  childCountState,
} from '@/atoms/search-detail/searchStates';
import { format } from 'date-fns';
import { formatDate } from '@/utils/formatDate';
import { useAccommodationList } from '@/api/search-result/query';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
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

  const selectedRegionIndices = useRecoilValue(regionIndex);
  const dateRange = useRecoilValue(rangeDate);
  const selectedRoomIndices = useRecoilValue(roomIndex);
  const adultCount = useRecoilValue(adultCountState);
  const childCount = useRecoilValue(childCountState);

  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      region: selectedRegionIndices.join(','),
    }));
  }, [selectedRegionIndices]);

  useEffect(() => {
    const startDate = dateRange?.from ?? new Date();
    const endDate = dateRange?.to ?? new Date();

    setSearchParams((prev) => ({
      ...prev,
      checkInStart: format(startDate, 'yyyy-MM-dd'),
      checkInEnd: format(endDate, 'yyyy-MM-dd'),
    }));
  }, [dateRange]);

  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      type: selectedRoomIndices.join(','),
    }));
  }, [selectedRoomIndices]);

  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      pax: adultCount + childCount,
    }));
  }, [adultCount, childCount]);

  useEffect(() => {
    if (accommodations && accommodations.length === 0) {
      router.push('/search-result/no-results');
    }
  }, [accommodations, router]);

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
      <AccommodationList accommodations={accommodations} />
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
