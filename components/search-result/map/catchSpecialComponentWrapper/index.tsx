import React from 'react';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { ITEMS_INFO } from '@/constants/catchItems';
import { CatchSpecialComponentWrapperProps } from '@/types/search-result/map/type';

const CatchSpecialComponentWrapper = ({
  selectedMarkerInfo,
}: CatchSpecialComponentWrapperProps) => {
  if (!selectedMarkerInfo) return null;

  const firstRoomItem = ITEMS_INFO.roomItems[0];

  return (
    <div className="absolute bottom-[6.25rem] left-1/2 transform -translate-x-1/2 w-9/12 z-10 p-3 px-3 bg-white">
      <CatchSpecialComponent
        roomName={firstRoomItem.roomName}
        roomType={firstRoomItem.roomType}
        resDate={firstRoomItem.resDate}
        oldPrice={firstRoomItem.oldPrice}
        discount={firstRoomItem.discount}
      />
    </div>
  );
};

export default CatchSpecialComponentWrapper;
