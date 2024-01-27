'use client';
import React, { useEffect } from 'react';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';
import CalendarBottomSheet from '@/components/common/searchBtmSheets/calendar';
import RoomBottomSheet from '@/components/common/searchBtmSheets/room';
import CustomerBottomSheet from '@/components/common/searchBtmSheets/customer';
import { useResetSearchAtoms } from '@/hooks/useResetSearchAtoms';

const SearchBtnComponent = () => {
  const resetAllSearchAtoms = useResetSearchAtoms();

  useEffect(() => {
    resetAllSearchAtoms(); // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-xl p-5">
      {/* 지역 선택버튼 & 바텀시트 */}
      <RegionBottomSheet buttonStyle="search" />
      {/* 날짜 선택버튼 & 바텀시트 */}
      <CalendarBottomSheet buttonStyle="search" />
      {/* 숙소유형 선택버튼 & 바텀시트 */}
      <RoomBottomSheet buttonStyle="search" />
      {/* 인원 수 선택버튼 & 바텀시트 */}
      <CustomerBottomSheet buttonStyle="search" />
    </div>
  );
};

export default SearchBtnComponent;
