'use client';
import React, { useEffect, useMemo } from 'react';
import SetTime from '../setTime';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  checkInDateState,
  hourState,
  minuteState,
  timeState,
} from '@/atoms/sale/timeAtom';
import BottomSheets from '@/components/common/bottomSheets';
import CalendarComponent from '@/components/common/calendar';
import { getDateWithDay } from '@/utils/get-date-with-day';
import { saleSingleDate } from '@/atoms/search-detail/searchStates';
import { isProductState } from '@/atoms/sale/productAtom';
const SaleEndContainer = () => {
  const time = useRecoilValue(timeState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);
  const checkInDate = useRecoilValue(checkInDateState);

  const isProduct = useRecoilValue(isProductState);
  const [selected, setSelected] = useRecoilState(saleSingleDate);
  const checkIn = new Date(checkInDate!);
  const date = useMemo(() => {
    return isProduct ? selected : checkIn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProduct, selected, checkInDate]);

  console.log(isProduct, date);

  useEffect(() => {
    setSelected(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate]);

  const selectedDateString = getDateWithDay(selected);

  const year = isProduct ? checkIn!.getFullYear() : date!.getFullYear();
  const month = isProduct ? checkIn!.getMonth() + 1 : date!.getMonth() + 1;
  const day = isProduct ? checkIn!.getDate() : date!.getDate();

  console.log(checkIn, month, day);
  const title =
    selected === undefined
      ? '판매일을 선택해주세요.'
      : selectedDateString +
        ' ' +
        time.toString() +
        ' ' +
        (hour < 10
          ? '0' +
            hour.toString() +
            ':' +
            (minute < 10 ? '0' + minute.toString() : minute.toString())
          : hour.toString() +
            ':' +
            (minute < 10 ? '0' + minute.toString() : minute.toString()));

  return (
    <div className="w-full flex flex-col mt-5">
      <h2 className="text-h5 font-semibold">판매 종료일 설정</h2>
      <p className="text-p1 opacity-50 mt-1 mb-3">
        판매 종료일 이후 판매글은 미노출 됩니다
      </p>
      <BottomSheets
        title={title}
        innerTitle="판매 종료일을 설정해주세요"
        placeholder={title}
        buttonSelect="search"
        icon="calendar"
        closeButton={true}
        innerButtonTitle={title + '로 설정하기'}
      >
        <div className="w-full flex flex-col">
          <div className="w-full h-[476px]">
            <CalendarComponent
              useSingleDate={true}
              outerControlAtom="sale"
              checkInYear={year}
              checkInMonth={month}
              checkInDay={day}
            />
          </div>
          <SetTime />
        </div>
      </BottomSheets>
    </div>
  );
};

export default SaleEndContainer;
