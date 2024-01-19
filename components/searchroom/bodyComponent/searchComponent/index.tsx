import React from 'react';
import RegionBottomSheet from '@/components/common/searchBtmSheets/region';
import CalendarBottomSheet from '@/components/common/searchBtmSheets/calendar';
import RoomBottomSheet from '@/components/common/searchBtmSheets/room';
import CustomerBottomSheet from '@/components/common/searchBtmSheets/customer';

const SearchBtnComponent = () => {
  return (
    <div className="w-full flex flex-col items-center text-xl">
      {/* 지역 선택버튼 & 바텀시트 */}
      <RegionBottomSheet />
      {/* 날짜 선택버튼 & 바텀시트 */}
      <CalendarBottomSheet />
      {/* 숙소유형 선택버튼 & 바텀시트 */}
      <RoomBottomSheet />
      {/* 인원 수 선택버튼 & 바텀시트 */}
      <CustomerBottomSheet />
    </div>
  );
};

export default SearchBtnComponent;
