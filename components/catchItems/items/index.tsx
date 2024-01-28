'use client';
import React, { useEffect } from 'react';
import { deadLinePageItems } from '@/api/deadline-items/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import { regionIndex } from '@/atoms/search-detail/searchStates';
import { DeadLineItem } from '@/types/deadline-items/types';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { formatDate } from '@/utils/formatDate';
import DeadLineSkeletonUI from '@/components/home/deadLineItems/deadLineSkeletonUI/idex';
import { deadlineItemTotalSize } from '@/atoms/deadlineItems/totalSizeAtom';

const InfiniteScrollContainer = () => {
  const currentDate = useRecoilValue(weekCalendarDate);
  const date = formatDate(currentDate);

  const regionFormat = useRecoilValue(regionIndex);
  const regionIdx = regionFormat.join(',');
  const region = regionIdx === '' ? 'all' : regionIdx;

  const setTotalSize = useSetRecoilState(deadlineItemTotalSize);

  const dropdown = useRecoilValue(dropdownState);
  const filterRecord: Record<string, string> = {
    '할인율 높은순': 'HIGH_DISCOUNT',
    '체크인 임박순': 'NEAR_CHECKIN',
  };
  const filter = filterRecord[dropdown];

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['deadLineItems', date, filter, region],
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

  useEffect(() => {
    setTotalSize(data?.pages[0].size);
  }, [data?.pages, setTotalSize]);

  const { pageHandler } = useProductInfoPage();

  return (
    <div className="">
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
          className="w-full max-h-[calc(100vh-128px)] overflow-auto flex flex-col mt-56 gap-[2rem] p-6 pt-2"
        >
          {data ? (
            data.pages.map((page, pageIndex) => (
              <div key={pageIndex} className="flex flex-col gap-[2rem]">
                {page.list.map((data: DeadLineItem) => (
                  <CatchSpecialComponent
                    key={data.productId + data.accommodationName + pageIndex}
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
