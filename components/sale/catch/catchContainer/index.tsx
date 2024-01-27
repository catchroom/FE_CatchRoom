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
import { isProductState } from '@/atoms/sale/productAtom';
import { checkInDateState } from '@/atoms/sale/timeAtom';

const CatchContainer = () => {
  const price = useRecoilValue(productPriceState); //product price
  const catchPrice = useRecoilValue(catchPriceState); //catch price

  const [open, setOpen] = useState(false);
  const [isCatch, setIsCatch] = useRecoilState(catchState);
  const [disable, setDisable] = useState(false);
  const [isNeverChange, setIsNeverChange] = useState(false);

  const selectedPrice = useRecoilValue(priceState);
  const selectedPercent = useRecoilValue(percentState);

  const [selectedSaleEndDate, setSelectedSaleEndDate] =
    useRecoilState(saleSingleDate);
  const checkInDate = useRecoilValue(checkInDateState);
  const checkIn = new Date(checkInDate!);

  const [selected, setSelected] = useRecoilState(catchSingleDate); // 캐치특가 선택 날짜
  const [selectedCatchPrice, setSelectedCatchPrice] =
    useRecoilState(catchPriceState);
  const [selectedCatchPercent, setSelectCatchPercent] =
    useRecoilState(catchPercentState);

  const isProduct = useRecoilValue(isProductState);

  useEffect(() => {
    // 만약 등록된 상품이면 퍼센트 값을 계산하기 위함
    if (isProduct && isCatch) {
      console.log(price, catchPrice);
      setSelectCatchPercent(100 - (catchPrice / price) * 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProduct, isCatch]);

  useEffect(() => {
    if (selectedSaleEndDate === undefined) setSelectedSaleEndDate(checkIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSaleEndDate]);

  useEffect(() => {
    if (selected === undefined && selectedSaleEndDate !== undefined) {
      const defaultDate = new Date(selectedSaleEndDate);
      defaultDate.setDate(defaultDate.getDate() - 1);
      setSelected(defaultDate);
    }
  }, [selected, selectedSaleEndDate]);

  useEffect(() => {
    const today = new Date();
    if (!isProduct && selectedSaleEndDate instanceof Date) {
      //만약 등록된 상품이 아니고 판매 날짜가 선택되었을 때
      const endDate = new Date(selectedSaleEndDate);
      endDate.setDate(endDate.getDate() - 1);
      setSelected(endDate);
      console.log(selectedSaleEndDate);
      if (selectedSaleEndDate.toDateString() === today.toDateString()) {
        // 그날짜가 체크인 날짜와 같다면 캐치특가 박스 disabled
        setDisable(true);
        setIsNeverChange(true);
        setIsCatch(false);
      } else {
        setIsNeverChange(false);
        if (selectedPercent !== 90) {
          setDisable(false);
          setIsNeverChange(false);
        }
      }
    }
    if (isProduct && selectedSaleEndDate instanceof Date) {
      const endDate = new Date(selectedSaleEndDate);
      endDate.setDate(endDate.getDate() - 1);
      setSelected(endDate);
      console.log(selectedSaleEndDate);
      //만약 등록된 상품인데 판매 날짜가 체크인 날짜와 같으면 캐치특가 박스 disabled
      if (selectedSaleEndDate?.toDateString() === today.toDateString()) {
        setDisable(true);
        setIsCatch(false);
        setIsNeverChange(true);
      } else {
        setIsNeverChange(false);
        if (selectedPercent !== 90) {
          setDisable(false);
          setIsNeverChange(false);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSaleEndDate]);

  // useEffect(() => {
  //   if (selectedPercent === 90) setIsNeverChange(true);
  //   else setIsNeverChange(false);
  // }, [selectedPercent]);

  const selectedDateString = getDateWithDay(selected);

  const date = useMemo(() => new Date(selected!), [selected]);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    let catchPercent: number = 0;
    console.log(isProduct, selectedPercent);
    console.log('확인', isNeverChange);
    if (isNeverChange) return;
    if (selectedPercent === 90) {
      setIsCatch(false);
      setDisable(true);
      return;
    }
    if (
      (isProduct && catchPrice === 0) ||
      (!isProduct && selectedPercent !== 0) //만약 등록된 상품인데 캐치특가가 없을 때
    ) {
      setDisable(false);
      if (selectedPercent <= 40) catchPercent = 50;
      else if (selectedPercent >= 50 && selectedPercent <= 80) {
        catchPercent = selectedPercent + 10;
      }
      setSelectedCatchPrice(price * ((100 - catchPercent) / 100));
      setSelectCatchPercent(catchPercent);
    } else if (isProduct && catchPrice !== 0) {
      if (selectedPercent !== 90) {
        setDisable(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPercent, isCatch]);

  const title =
    selectedPrice === 0
      ? '판매가를 선택해주세요'
      : selectedCatchPrice === 0
        ? selectedPrice.toLocaleString() + '원'
        : selectedCatchPrice.toLocaleString() + '원';

  const buttonSelect = selectedPrice === 0 ? 'input' : 'price';
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
          className="flex flex-col p-3 absolute top-12 rounded w-full gap-2.5 bg-surface border border-border-sub shadow-custom z-10"
          data-testid="catch-describe"
        >
          <p className="text-p1 font-bold">
            자동으로 메인 상단에 노출되어 빠른 구매전환을 유도해요!
          </p>
          <ul className="text-p2 text-text-sub">
            <li>∙ 체크인 당일에는 설정 불가</li>
            <li>∙ 적용 시점 시간 : 설정일 00:00부터 적용</li>
            <li>∙ 판매가 할인율 90% 시 설정 불가</li>
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
              isCatch={true}
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
