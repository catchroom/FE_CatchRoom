'use client';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import LeftArrowComponent from '@/public/svgComponent/leftArrow';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';

const TopHeader = () => {
  const router = useRouter();
  const [selectedDate] = useRecoilState<Date>(weekCalendarDate);

  const backPageHandler = () => {
    router.back();
  };
  return (
    <div className="relative h-[3.25rem] flex items-center justify-center">
      <button className="absolute left-0 ml-3 p-3" onClick={backPageHandler}>
        <LeftArrowComponent />
      </button>
      <button className="flex items-center justify-center text-t1 font-bold">
        {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월
      </button>
    </div>
  );
};

export default TopHeader;
