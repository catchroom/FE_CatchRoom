'use client';
import { useDeadLinePageItems } from '@/api/deadline-items/query';
import { searchDropdownState } from '@/atoms/catchSale/dropdownAtom';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import { regionIndex } from '@/atoms/search-detail/searchStates';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { DeadLineItem } from '@/types/deadline-items/types';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ItemsComponent = () => {
  const currentDate = useRecoilValue(weekCalendarDate);
  const filter = useRecoilValue(searchDropdownState);
  const region = useRecoilValue(regionIndex);

  const dateFormat =
    currentDate.getFullYear() +
    '-' +
    currentDate.getMonth() +
    1 +
    '-' +
    currentDate.getDate();

  const filterFormat = (): string | undefined => {
    if (filter === '할인율 높은순') return 'HIGH_DISCOUNT';
    if (filter === '낮은 가격순') return 'LOW_PRICE';
  };

  const regionFormat = region.join(',');

  const { data } = useDeadLinePageItems(
    dateFormat,
    filterFormat() || 'LOW_PRICE',
    regionFormat,
    1,
  );

  const { pageHandler } = useProductInfoPage();

  return (
    <div className=" overflow-y-hidden">
      <div className="w-full flex flex-col mt-56 gap-12 p-6 pt-2">
        {data &&
          data.map((data: DeadLineItem) => {
            return (
              <CatchSpecialComponent
                key={data.productId}
                image={data.image}
                accommodationName={data.accommodationName}
                roomName={data.roomName}
                resDate={data.checkIn + ' - ' + data.checkOut}
                catchType={data.catchType}
                originalPrice={data.originalPrice}
                discountRate={data.discountRate}
                sellPrice={data.sellPrice}
                pageHandler={() => pageHandler()}
              />
            );
          })}
        {/* {data.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-52 text-t3 text-text-sub">
            <p>선택한 날짜에 체크인 가능한 숙소가 없어요.</p>
            <p>다른 날짜를 선택해주세요.</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ItemsComponent;
