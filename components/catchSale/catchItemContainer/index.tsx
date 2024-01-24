'use client';
import React from 'react';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { useQueryGetCatchItemsListForScroll } from '@/api/home/query';
import { catchItems } from '@/types/common/catchItems/types';
import { useRecoilValue } from 'recoil';
import { dropdownState } from '@/atoms/catchSale/dropdownAtom';

const CatchItemContainer = () => {
  // const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
  //   useQueryGetCatchItemsListForScroll(2);
  // const observer = useRef<IntersectionObserver | null>(null);
  // const lastItemRef = useCallback(
  //   (node: Element | null) => {
  //     if (isFetchingNextPage) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasNextPage) {
  //         fetchNextPage();
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isFetchingNextPage, fetchNextPage, hasNextPage],
  // );

  const dropdown = useRecoilValue(dropdownState);

  const filter: Record<string, string> = {
    '할인율 높은순': 'HIGH_DISCOUNT',
    '체크인 임박순': 'NEAR_CHECKIN',
    '낮은 가격순': 'LOW_PRICE',
  };
  const { data } = useQueryGetCatchItemsListForScroll(2, filter[dropdown]);
  console.log(data);
  return (
    <div className=" overflow-y-hidden">
      <div className="w-full flex flex-col gap-12 px-6 mt-36">
        {data?.list.map((item: catchItems) => (
          <CatchSpecialComponent
            key={item.roomName}
            accommodationName={item.accommodationName}
            roomName={item.roomName}
            resDate={item.checkIn + '-' + item.checkOut}
            originalPrice={item.originalPrice}
            discountRate={item.discountRate}
            sellPrice={item.sellPrice}
            catchType={item.catchType}
            // ref={index === group.items.length - 1 ? lastItemRef : undefined}
          />
        ))}
        {/* {isFetchingNextPage && <div>Loading.... </div>} */}
      </div>
    </div>
  );
};

export default CatchItemContainer;
