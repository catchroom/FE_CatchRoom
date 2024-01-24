import CatchSpecialComponent from '@/components/common/catchComponent';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { Accommodation } from '@/types/search-result/list/types';
import React from 'react';
import { formatToKoreanDate } from '@/utils/formatDate';

const AccommodationList = ({
  accommodations = [],
}: {
  accommodations: Accommodation[];
}) => {
  const { pageHandler } = useProductInfoPage();

  return (
    <div className=" overflow-y-hidden">
      <div className="w-full flex flex-col gap-12 px-6">
        {accommodations.map((accommodation) => {
          const formattedCheckIn = formatToKoreanDate(accommodation.checkIn);
          const formattedCheckOut = formatToKoreanDate(accommodation.checkOut);
          const resDate = `${formattedCheckIn} - ${formattedCheckOut}`;

          return (
            <CatchSpecialComponent
              key={accommodation.productId}
              image={accommodation.image}
              accommodationName={accommodation.accommodationName}
              roomName={accommodation.roomName}
              resDate={resDate}
              catchType={accommodation.catchType}
              originalPrice={accommodation.originalPrice}
              discountRate={accommodation.discountRate}
              sellPrice={accommodation.sellPrice}
              pageHandler={() => pageHandler()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccommodationList;
