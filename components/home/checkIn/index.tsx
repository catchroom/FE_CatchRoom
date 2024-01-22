'use client';
import React from 'react';
import CatchSpecialComponent from '@/components/common/catchComponent';
import WeekCalendar from '@/components/common/weekCalendar';
import { ITEMS_INFO } from '@/constants/catchItems';
import { useBtnLoading } from '@/hooks/useBtnLoading';
import { Button } from '@material-tailwind/react';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';

const CheckInComponent = () => {
  const { isLoading, btnHandler } = useBtnLoading('/deadline-items');

  const { pageHandler } = useProductInfoPage();

  return (
    <div className="relative w-full h-[51.9375rem] mt-14 ">
      <div className="text-h4 font-extrabold">
        <p>체크인 마감임박!</p>
      </div>
      <div className="relative w-full h-[34.375rem] rounded-lg border-2 border-border-sub bg-white pt-5 px-5 mt-3 mx-auto">
        {/* 상단 일주일 달력 */}
        <div className="flex flex-wrap items-center justify-between h-[4rem] mb-[1.75rem] text-p1 font-semibold">
          <WeekCalendar />
        </div>

        {/* 캐치특가 상품 목록 */}
        <div className="w-full h-[27.14rem] flex flex-wrap gap-9 overflow-hidden">
          {ITEMS_INFO.roomItems.slice(0, 3).map((item) => {
            return (
              <CatchSpecialComponent
                key={item.roomName}
                pageHandler={() => pageHandler()}
                roomName={item.roomName}
                roomType={item.roomType}
                resDate={item.resDate}
                oldPrice={item.oldPrice}
                discount={item.discount}
              />
            );
          })}
        </div>

        {/* 전체보기 버튼 컴포넌트 */}
        <div className="relative bottom-16 w-full z-20 bg-white rounded-[4px]">
          <Button
            placeholder="button"
            loading={isLoading ? true : false}
            className="absolute font-pretend z-20 flex items-center justify-center w-full h-[2.75rem] rounded-[4px] border border-border-primary text-t1 text-text-primary font-bold bg-white shadow-none"
            onClick={btnHandler}
          >
            {isLoading ? '' : '전체보기'}
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[130px] rounded-lg bg-gradient-to-t from-[#ffffffbd] to-transparent" />
      </div>
    </div>
  );
};

export default CheckInComponent;
