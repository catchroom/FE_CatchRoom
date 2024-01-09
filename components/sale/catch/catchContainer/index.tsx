'use client';
import React, { useState } from 'react';
import QuestionMark from '@/public/svgComponent/questionMark';
import SlideButton from '@/components/common/slideButton';
import BigCalendarIcon from '@/public/svgComponent/bigCalendar';

const CatchContainer = () => {
  const [on, setOn] = useState(true);
  const [open, setOpen] = useState(false);
  const handleToggleButton = () => {
    setOn((prev) => !prev);
  };
  const handleQuestionButtonClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <h2 className="text-h5 font-bold">캐치특가 자동 설정</h2>
          <div onClick={handleQuestionButtonClick} className="cursor-pointer">
            <QuestionMark />
          </div>
        </div>
        <SlideButton isButtonActive={on} stateHandler={handleToggleButton} />
      </div>
      {open && (
        <div className="flex flex-col p-3 rounded w-full gap-2.5 border border-border-sub shadow-custom">
          <p className="text-p1 font-bold">
            자동으로 메인 상단에 노출되어 빠른 구매전환을 유도해요!
          </p>
          <ul className="text-p2 text-text-sub">
            <li>∙ 체크인 당일에는 설정 불가</li>
            <li>∙ 적용 시점 시간 : 설정일 00:00부터 적용</li>
          </ul>
        </div>
      )}
      <div>
        <p className="text-t2">캐치특가 적용 가격</p>
        <div className="flex w-full px-4 border border-border-sub gap-2 mt-2 h-[3.8rem] rounded items-center">
          <BigCalendarIcon />
          {/* 바텀시트 모달로 변경예정 */}
          <button className="w-full flex items-start">12월 9일 (월)</button>
        </div>
      </div>
      <div>
        <p className="text-t2">캐치특가 적용 시점</p>
        <div className="flex w-full px-4 border border-border-sub gap-2 mt-2 h-[3.8rem] rounded items-center">
          <BigCalendarIcon />
          {/* 바텀시트 모달로 변경예정 */}
          <button className="w-full flex items-start">12월 9일 (월)</button>
        </div>
      </div>
    </div>
  );
};

export default CatchContainer;
