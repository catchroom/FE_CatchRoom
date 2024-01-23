'use client';
import React, { useEffect, useMemo, useState } from 'react';
import QuestionMark from '@/public/svgComponent/questionMark';
import SlideButton from '@/components/common/slideButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  catchPercentState,
  catchPriceState,
  catchState,
} from '@/atoms/sale/catchAtom';
import BottomSheets from '@/components/common/bottomSheets';
import BottomSheetsContent from '../bottomSheetsContent';
import {
  percentState,
  priceState,
  productPriceState,
} from '@/atoms/sale/priceAtom';
import CalendarComponent from '@/components/common/calendar';
import { getDateWithDay } from '@/utils/get-date-with-day';
import {
  catchSingleDate,
  saleSingleDate,
} from '@/atoms/search-detail/searchStates';

const CatchContainer = () => {
  const price = useRecoilValue(productPriceState); //product price

  const [open, setOpen] = useState(false);
  const [isCatch, setIsCatch] = useRecoilState(catchState);
  const [disable, setDisable] = useState(false);

  const selectedPrice = useRecoilValue(priceState);
  const selectedPercent = useRecoilValue(percentState);

  const percent = selectedPercent <= 40 ? 50 : selectedPercent + 10;

  const selectedSaleEndDate = useRecoilValue(saleSingleDate);

  const [selected, setSelected] = useRecoilState(catchSingleDate); // 캐치특가 선택 날짜

  useEffect(() => {
    if (selectedSaleEndDate instanceof Date) {
      const endDate = new Date(selectedSaleEndDate);
      endDate.setDate(endDate.getDate() - 1);
      setSelected(endDate);
      const today = new Date();
      if (selectedSaleEndDate.toDateString() === today.toDateString()) {
        setDisable(true);
        setIsCatch(false);
      } else setDisable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSaleEndDate]);

  const selectedDateString = getDateWithDay(selected);

  const date = useMemo(() => new Date(selected!), [selected]);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const [selectedCatchPrice, setSelectedCatchPrice] =
    useRecoilState(catchPriceState);
  const [selectedCatchPercent, setSelectCatchPercent] =
    useRecoilState(catchPercentState);

  useEffect(() => {
    console.log(selectedPercent, disable);
    if (selectedPercent !== 0) {
      setDisable(false);
      if (selectedPercent <= 40) setSelectCatchPercent(50);
      else if (selectedPercent >= 50 && selectedPercent <= 80) {
        setSelectCatchPercent(selectedPercent + 10);
      } else if (selectedPercent >= 90) {
        setIsCatch(false);
        setDisable(true);
      }
    } else setDisable(true);
    setSelectedCatchPrice(price * ((100 - percent) / 100));
    console.log(selectedPercent, disable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPercent]);

  const title =
    selectedPrice === 0
      ? '판매가를 선택해주세요'
      : selectedCatchPrice === 0
        ? selectedPrice.toLocaleString() + '원'
        : selectedCatchPrice.toLocaleString() + '원';

  const buttonSelect = selectedCatchPrice === 0 ? 'input' : 'price';
  const handleToggleButton = () => {
    setIsCatch((prev) => !prev);
  };
  const handleQuestionButtonClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col relative">
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
          className="flex flex-col p-3 absolute top-12 rounded w-full gap-2.5 bg-surface border border-border-sub shadow-custom"
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
            <p className="text-t2 mb-2 mt-6">캐치특가 적용 가격</p>
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
            <p className="text-t2 mb-2 mt-6">캐치특가 적용 날짜</p>
            <BottomSheets
              title={selectedDateString}
              innerTitle="캐치특가 적용날짜를 설정해주세요"
              placeholder={selectedDateString}
              buttonSelect="search"
              icon="calendar"
              closeButton={true}
              innerButtonTitle={selectedDateString + '로 설정하기'}
            >
              <div className="w-full h-[480px]">
                <CalendarComponent
                  useSingleDate={true}
                  outerControlAtom="catch"
                  checkInYear={year}
                  checkInMonth={month}
                  checkInDay={day}
                />
              </div>
            </BottomSheets>
          </div>
        </>
      )}
    </div>
  );
};

export default CatchContainer;
