'use client';
import React from 'react';
import CatchSpecialComponent from '@/components/common/catchComponent';
import WeekCalendar from '@/components/common/weekCalendar';
import { useBtnLoading } from '@/hooks/useBtnLoading';
import { Button } from '@material-tailwind/react';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import { useRecoilValue } from 'recoil';
import { useDeadLineItems } from '@/api/deadline-items/query';
import { DeadLineItem } from '@/types/deadline-items/types';
import { formatDate } from '@/utils/formatDate';
import DeadLineSkeletonUI from './deadLineSkeletonUI/idex';

const CheckInComponent = () => {
  const { isBtnLoading, btnHandler } = useBtnLoading('/deadline-items');
  const currentDate = useRecoilValue(weekCalendarDate);

  const date = formatDate(currentDate);

  const { data, isLoading } = useDeadLineItems(date);

  const { pageHandler } = useProductInfoPage();

  return (
    <div className="relative w-full h-[51.9375rem] mt-14 ">
      <div className="text-h4 font-extrabold">
        <p>체크인 마감임박!</p>
      </div>
      <div className="relative w-full h-[34.375rem] rounded-lg border-[1px] border-border-sub bg-white pt-5 px-5 mt-3 mx-auto">
        {/* 상단 일주일 달력 */}
        <div className="flex flex-wrap items-center justify-between h-[4rem] mb-[1.75rem] text-p1 font-semibold">
          <WeekCalendar />
        </div>

        {/* 캐치특가 상품 목록 */}
        <div className="w-full h-[436px] flex flex-col justify-start gap-[2rem] overflow-hidden">
          {isLoading && <DeadLineSkeletonUI />}

          {data &&
            data.list.map((data: DeadLineItem) => {
              return (
                <CatchSpecialComponent
                  key={data.productId}
                  image={data.image}
                  accommodationName={data.accommodationName}
                  roomName={data.roomName}
                  checkIn={data.checkIn}
                  checkOut={data.checkOut}
                  catchType={data.catchType}
                  originalPrice={data.originalPrice}
                  sellPrice={data.sellPrice}
                  discountRate={data.discountRate}
                  pageHandler={() => pageHandler(data.productId)}
                />
              );
            })}
          {data && data.size === 0 && (
            <div className="flex flex-col items-center justify-center pt-32 text-t3 text-text-sub">
              <p>선택한 날짜에 체크인 가능한 숙소가 없어요.</p>
              <p>다른 날짜를 선택해주세요.</p>
            </div>
          )}
        </div>

        {/* 전체보기 버튼 컴포넌트 */}
        <div className="relative bottom-20 w-full z-20 bg-white rounded-[4px]">
          <Button
            placeholder="button"
            loading={isBtnLoading ? true : false}
            className="absolute font-pretend z-20 flex items-center justify-center w-full h-[2.75rem] rounded-[4px] border border-border-primary text-t1 text-text-primary font-bold bg-white shadow-none"
            onClick={btnHandler}
          >
            {isBtnLoading ? '불러오는 중..' : '전체보기'}
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 sm:h-[160px] acc:h-[150px] lg:h-[130px] rounded-lg bg-gradient-to-t from-[#ffffffbd] to-transparent" />
      </div>
    </div>
  );
};

export default CheckInComponent;
