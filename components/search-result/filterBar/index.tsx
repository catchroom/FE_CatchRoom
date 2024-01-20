'use client';
import React, { useEffect } from 'react';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';
import CalendarBottomSheet from '@/components/common/searchBtmSheets/calendar';
import RoomBottomSheet from '@/components/common/searchBtmSheets/room';
import CustomerBottomSheet from '@/components/common/searchBtmSheets/customer';
import { useResetSearchAtoms } from '@/hooks/useResetSearchAtoms';

const FilterBar = () => {
  const resetAllSearchAtoms = useResetSearchAtoms();

  useEffect(() => {
    resetAllSearchAtoms(); // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full max-w-[480px] fixed z-10 flex  gap-1 overflow-x-auto whitespace-nowrap px-5 pt-2 pb-4 mt-14 bg-surface-sub border-b border-divider-sub">
      <RegionBottomSheet buttonStyle="dropdown" />
      <CalendarBottomSheet buttonStyle="dropdown" />
      <RoomBottomSheet buttonStyle="dropdown" />
      <CustomerBottomSheet buttonStyle="dropdown" />
    </div>
  );
};

export default FilterBar;
