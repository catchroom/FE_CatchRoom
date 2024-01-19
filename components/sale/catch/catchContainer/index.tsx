'use client';
import React, { useEffect, useState } from 'react';
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
import { percentState, priceState } from '@/atoms/sale/priceAtom';

type PropsType = {
  price: number;
};
const CatchContainer = ({ price }: PropsType) => {
  const [open, setOpen] = useState(false);
  const [isCatch, setIsCatch] = useRecoilState(catchState);
  const [disable, setDisable] = useState(false);

  const selectedPrice = useRecoilValue(priceState);
  const selectedPercent = useRecoilValue(percentState);

  const [selectedCatchPrice, setSelectedCatchPrice] =
    useRecoilState(catchPriceState);
  const [selectedCatchPercent, setSelectCatchPercent] =
    useRecoilState(catchPercentState);

  useEffect(() => {
    if (selectedPercent !== 0) {
      setDisable(false);
      if (selectedPercent <= 40) setSelectCatchPercent(50);
      else if (selectedPercent >= 50 && selectedPercent <= 80) {
        setSelectCatchPercent(selectedPercent + 10);
      } else if (selectedPercent >= 90) {
        setIsCatch(false);
        setDisable(true);
      }
    }
    setSelectedCatchPrice(price * ((100 - percent) / 100));
  }, [selectedPercent]);

  const title =
    selectedPrice === 0
      ? '판매가를 선택해주세요'
      : selectedCatchPrice === 0
        ? selectedPrice.toLocaleString() + '원'
        : selectedCatchPrice.toLocaleString() + '원';

  const percent = selectedPercent <= 40 ? 50 : selectedPercent + 10;

  const buttonSelect = selectedCatchPrice === 0 ? 'input' : 'price';
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
          <div
            onClick={handleQuestionButtonClick}
            className="cursor-pointer"
            data-testid="question-mark"
          >
            <QuestionMark />
          </div>
        </div>
        <SlideButton
          isButtonActive={isCatch}
          stateHandler={handleToggleButton}
          isDisabled={disable}
        />
      </div>
      {open && (
        <div
          className="flex flex-col p-3 rounded w-full gap-2.5 border border-border-sub shadow-custom"
          data-testid="catch-describe"
        >
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
              innerTitle="캐치특가 판매가를 선택해주세요"
              buttonSelect={buttonSelect}
              outerControl={true}
              price={selectedCatchPrice}
              percent={selectedCatchPercent}
              outerControlAtom="catch"
            >
              <BottomSheetsContent price={price} />
            </BottomSheets>
          </div>
          <div>
            <div className="flex w-full px-4 border border-border-sub gap-2 mt-2 h-[3.8rem] rounded items-center">
              <BigCalendarIcon />
              {/* 바텀시트 모달로 변경예정 */}
              <button className="w-full flex items-start">
                캐치특가 적용날짜를 선택해주세요
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CatchContainer;
