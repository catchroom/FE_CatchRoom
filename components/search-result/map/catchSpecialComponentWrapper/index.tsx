import React from 'react';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { CatchSpecialComponentWrapperProps } from '@/types/search-result/map/type';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';

const CatchSpecialComponentWrapper = ({
  selectedMarkerInfo,
}: CatchSpecialComponentWrapperProps) => {
  const { pageHandler } = useProductInfoPage();
  if (!selectedMarkerInfo) return null;

  return (
    <div className="absolute bottom-[11.5rem] left-1/2 transform -translate-x-1/2 w-9/12 z-[5] p-3 px-3 bg-white">
      <CatchSpecialComponent
        key={selectedMarkerInfo.productId}
        image={selectedMarkerInfo.image}
        accommodationName={selectedMarkerInfo.accommodationName}
        roomName={selectedMarkerInfo.roomName}
        checkIn={selectedMarkerInfo.checkIn}
        checkOut={selectedMarkerInfo.checkOut}
        catchType={selectedMarkerInfo.catchType}
        originalPrice={selectedMarkerInfo.originalPrice}
        discountRate={selectedMarkerInfo.discountRate}
        sellPrice={selectedMarkerInfo.sellPrice}
        pageHandler={() => pageHandler(selectedMarkerInfo.productId)}
      />
    </div>
  );
};

export default CatchSpecialComponentWrapper;
