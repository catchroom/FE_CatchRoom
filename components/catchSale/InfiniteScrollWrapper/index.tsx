'use client';

import { getCatchItemsListForScroll } from '@/api/home/api';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { catchItems } from '@/types/common/catchItems/types';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import { totalSizeState } from '@/atoms/catchSale/totalSizeAtom';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { regionIndex } from '@/atoms/search-detail/searchStates';

const InfiniteScrollWrapper = () => {
  const dataType = 2;

  const filterRecord: Record<string, string> = {
    '할인율 높은순': 'HIGH_DISCOUNT',
    '체크인 임박순': 'NEAR_CHECKIN',
    '낮은 가격순': 'LOW_PRICE',
  };

  const dropdown = useRecoilValue(dropdownState);
  const setTotalSize = useSetRecoilState(totalSizeState);

  const regionValue = useRecoilValue(regionIndex);
  const regionFormat = regionValue.join(',');
  const region = regionFormat === '' ? 'all' : regionValue;

  const filter = filterRecord[dropdown];
  console.log(filter);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['messages', filter, region],
    queryFn: ({ pageParam }) =>
      getCatchItemsListForScroll({ dataType, pageParam, filter, region }),
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

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      scrollableTarget="scrollableDiv"
      loader={<div className="loader" key={0}></div>}
    >
      <div
        id="scrollableDiv"
        className="w-full max-h-[calc(100vh-128px)] overflow-auto flex flex-col mt-[128px] gap-12 px-6 pt-2"
      >
        {' '}
        {data ? (
          data.pages.map((page, pageIndex) => (
            <div key={pageIndex} className="flex flex-col gap-8">
              {page.list.map((item: catchItems) => (
                <CatchSpecialComponent
                  key={item.productId}
                  accommodationName={item.accommodationName}
                  roomName={item.roomName}
                  checkIn={item.checkIn}
                  checkOut={item.checkOut}
                  originalPrice={item.originalPrice}
                  discountRate={item.discountRate}
                  sellPrice={item.sellPrice}
                  catchType={item.catchType}
                  image={item.image}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollWrapper;
