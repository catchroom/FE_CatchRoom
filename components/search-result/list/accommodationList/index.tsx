import CatchSpecialComponent from '@/components/common/catchComponent';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import React, { useEffect } from 'react';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';
import {
  adultCountState,
  childCountState,
  rangeDate,
  regionIndex,
  roomIndex,
} from '@/atoms/search-detail/searchStates';
import { useInfiniteQuery } from '@tanstack/react-query';
import { accommodationList } from '@/api/search-result/api';
import { format, addYears } from 'date-fns';
import { catchItems } from '@/types/common/catchItems/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { accommodationsCountState } from '@/atoms/search-result/countAtom';
import ListSkeletonUI from '../listSkeletonUI';

const AccommodationList = () => {
  const { pageHandler } = useProductInfoPage();
  const filterRecord: Record<string, string> = {
    '할인율 높은순': 'HIGH_DISCOUNT',
    '체크인 임박순': 'NEAR_CHECKIN',
    '낮은 가격순': 'LOW_PRICE',
  };
  const dropdown = useRecoilValue(dropdownState);
  const setTotalSize = useSetRecoilState(accommodationsCountState);

  const regionValue = useRecoilValue(regionIndex);
  const regionFormat = regionValue.join(',');
  const region = regionFormat === '' ? 'all' : regionValue;

  const filter = filterRecord[dropdown];
  console.log('필터: ', filter);
  const dateRange = useRecoilValue(rangeDate);
  console.log('데이트 ', dateRange);
  const type = useRecoilValue(roomIndex);
  console.log('타입: ', type);
  const adultCount = useRecoilValue(adultCountState);

  const childCount = useRecoilValue(childCountState);
  const pax = adultCount + childCount;
  console.log('인원: ', pax);
  const checkInStart = dateRange?.from
    ? format(new Date(dateRange.from), 'yyyy-MM-dd')
    : format(new Date(), 'yyyy-MM-dd');
  const tenYearsLater = addYears(new Date(), 10);
  const checkInEnd = dateRange?.to
    ? format(new Date(dateRange.to), 'yyyy-MM-dd')
    : format(tenYearsLater, 'yyyy-MM-dd');
  console.log('체크스타트: ', checkInStart);
  console.log('체크엔드: ', checkInEnd);

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [
      'searchResult',
      filter,
      region,
      dateRange,
      type,
      adultCount,
      childCount,
    ],
    queryFn: ({ pageParam }) =>
      accommodationList({
        region,
        checkInStart,
        checkInEnd,
        type,
        pax,
        filter,
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

  return (
    <div className=" overflow-y-hidden">
      {isLoading && (
        <div
          id="scrollableDiv"
          className="w-full h-full overflow-auto mt-36 p-6 pt-2"
        >
          <ListSkeletonUI />
        </div>
      )}
      <div className="w-full flex flex-col gap-12 px-6">
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
                      pageHandler={() => pageHandler(item.productId!)}
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
      </div>
    </div>
  );
};

export default AccommodationList;
