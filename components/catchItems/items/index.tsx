'use client';
import React from 'react';
import { deadLinePageItems } from '@/api/deadline-items/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import { searchDropdownState } from '@/atoms/catchSale/dropdownAtom';
import { regionIndex } from '@/atoms/search-detail/searchStates';
import { DeadLineItem } from '@/types/deadline-items/types';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { formatDate } from '@/utils/formatDate';
import DeadLineSkeletonUI from '@/components/home/deadLineItems/deadLineSkeletonUI/idex';

const InfiniteScrollContainer = () => {
  const currentDate = useRecoilValue(weekCalendarDate);
  const filterFormat = useRecoilValue(searchDropdownState);
  const regionFormat = useRecoilValue(regionIndex);

  const date = formatDate(currentDate);

  const filter =
    filterFormat === '할인율 높은순' ? 'HIGH_DISCOUNT' : 'LOW_PRICE';

  const regionIdx = regionFormat.join(',');
  const region = regionIdx === '' ? 'all' : regionIdx;

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['deadLineItems', currentDate, filterFormat, regionFormat],
    queryFn: ({ pageParam }) =>
      deadLinePageItems({
        date,
        filter,
        region,
        pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.list.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });

  const { pageHandler } = useProductInfoPage();

  return (
    <div className="overflow-y-hidden">
      {isLoading && (
        <div
          id="scrollableDiv"
          className="w-full h-full overflow-auto mt-56 p-6 pt-2"
        >
          <DeadLineSkeletonUI />
        </div>
      )}

      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div className="loader" key={0}></div>}
      >
        <div
          id="scrollableDiv"
          className="w-full h-full overflow-auto mt-56 p-6 pt-2"
        >
          {data?.pages[0].size !== 0 ? (
            data?.pages.map((page, pageIndex) => (
              <div key={pageIndex} className="flex flex-col gap-[2rem]">
                {page.list.map((data: DeadLineItem) => (
                  <CatchSpecialComponent
                    key={data.productId}
                    pageHandler={() => pageHandler(data.productId)}
                    image={data.image}
                    accommodationName={data.accommodationName}
                    roomName={data.roomName}
                    checkIn={data.checkIn}
                    checkOut={data.checkOut}
                    catchType={data.catchType}
                    originalPrice={data.originalPrice}
                    discountRate={data.discountRate}
                    sellPrice={data.sellPrice}
                  />
                ))}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center pt-52 text-t3 text-text-sub">
              <p>선택한 날짜에 체크인 가능한 숙소가 없어요.</p>
              <p>다른 날짜를 선택해주세요.</p>
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollContainer;
