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
const SaleEndContainer = () => {
  const time = useRecoilValue(timeState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);
  const checkInDate = useRecoilValue(checkInDateState);

  const date = useMemo(() => new Date(checkInDate!), [checkInDate]);
  const [selected, setSelected] = useRecoilState(saleSingleDate);

  useEffect(() => {
    setSelected(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const selectedDateString = getDateWithDay(selected);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const title =
    selectedDateString +
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
