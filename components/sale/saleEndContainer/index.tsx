'use client';
import React from 'react';
import BigCalendarIcon from '@/public/svgComponent/bigCalendar';

const SaleEndContainer = () => {
  return (
    <div className="w-full flex flex-col mt-5 gap-3">
      <h2 className="text-h5 font-semibold">판매 종료일 설정</h2>
      <p className="text-p1 opacity-50 mt-1">
        판매 종료일 이후 판매글은 미노출 됩니다
      </p>
      <div className="flex w-full px-4 border border-border-sub gap-2 h-[3.8rem] rounded items-center">
        <BigCalendarIcon />
        {/* 바텀시트 모달로 변경예정 */}
        <button className="w-full flex items-start">12월 9일 (월)</button>
      </div>
    </div>
  );
};

export default SaleEndContainer;
