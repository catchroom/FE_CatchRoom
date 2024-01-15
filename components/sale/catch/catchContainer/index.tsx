'use client';
import React, { useState } from 'react';
import QuestionMark from '@/public/svgComponent/questionMark';
import SlideButton from '@/components/common/slideButton';
import BigCalendarIcon from '@/public/svgComponent/bigCalendar';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  catchPercentState,
  catchPriceState,
  catchState,
} from '@/atoms/sale/catchAtom';
import BottomSheets from '@/components/common/bottomSheets';
import BottomSheetsContent from '../bottomSheetsContent';

type PropsType = {
  price: number;
};
const CatchContainer = ({ price }: PropsType) => {
  const [open, setOpen] = useState(false);
  const [isCatch, setIsCatch] = useRecoilState(catchState);
  const selectCatchPrice = useRecoilValue(catchPriceState);
  const selectCatchPercent = useRecoilValue(catchPercentState);

  const title =
    selectCatchPrice === 0
      ? '판매가를 선택해주세요'
      : selectCatchPrice.toLocaleString() + '원';

  const buttonSelect = selectCatchPrice === 0 ? 'input' : 'price';
  const handleToggleButton = () => {
    setIsCatch((prev) => !prev);
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
        <SlideButton
          isButtonActive={isCatch}
          stateHandler={handleToggleButton}
        />
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
      {isCatch && (
        <>
          <div>
            <p className="text-t2">캐치특가 적용 가격</p>
            <BottomSheets
              title={title}
              innerTitle="캐치특가 판매 금액을 선택해주세요"
              buttonSelect={buttonSelect}
              outerControl={true}
              price={selectCatchPrice}
              percent={selectCatchPercent}
            >
              <BottomSheetsContent price={price} />
            </BottomSheets>
          </div>
          <div>
            <p className="text-t2">캐치특가 적용 시점</p>
            <div className="flex w-full px-4 border border-border-sub gap-2 mt-2 h-[3.8rem] rounded items-center">
              <BigCalendarIcon />
              {/* 바텀시트 모달로 변경예정 */}
              <button className="w-full flex items-start">12월 9일 (월)</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CatchContainer;
