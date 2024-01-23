'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import './custom-styles.css';
import MidLineIcon from '@/public/svgComponent/calendar/midline';

import { CalendarContainerProps } from '@/types/common/calendar/type';
import {
  catchSingleDate,
  rangeDate,
  saleSingleDate,
} from '@/atoms/search-detail/searchStates';

const CalendarComponent = ({
  useSingleDate,
  searchAll,
  checkInYear,
  checkInMonth,
  checkInDay,
  outerControlAtom = 'sale',
}: CalendarContainerProps) => {
  const outerControlState = {
    sale: saleSingleDate,
    catch: catchSingleDate,
  };

  const [selected, setSelected] = useRecoilState(
    outerControlState[outerControlAtom],
  );
  const [range, setRange] = useRecoilState(rangeDate);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate() - 1;

  const fromMonth = new Date(today);
  const toMonth = new Date(today);
  toMonth.setMonth(today.getMonth() + 5);

  const sDisabledDays = [
    { from: new Date(1900, 1, 1), to: new Date(year, month, date) },
    {
      from: new Date(checkInYear!, checkInMonth! - 1, checkInDay! + 1),
      to: new Date(checkInYear!, checkInMonth! + 5),
    },
  ];

  const rDisabledDay = {
    from: new Date(1900, 1, 1),
    to: new Date(year, month, date),
  };
  const disableAll = {
    from: new Date(1900, 1, 1),
    to: new Date(2099, 12, 31),
  };

  const leftFooterStyle = 'text-h3 font-semibold mr-3 break-keep';
  const rightFooterStyle = 'text-h3 font-semibold ml-3 break-keep';

  let footer = (
    <>
      <p className={leftFooterStyle}>시작 날짜</p>
      <MidLineIcon />
      <p className={`${rightFooterStyle} text-text-disabled`}>종료 날짜</p>
    </>
  );

  if (range?.from) {
    if (!range.to) {
      footer = (
        <>
          <p className={`${leftFooterStyle} text-text-disabled`}>
            {format(range.from, 'MM월 dd일')}
          </p>
          <MidLineIcon />
          <p className={rightFooterStyle}>종료 날짜</p>
        </>
      );
    } else if (range.to) {
      footer = (
        <>
          <p className={leftFooterStyle}>{format(range.from, 'MM월 dd일')}</p>
          <MidLineIcon />
          <p className={rightFooterStyle}>{format(range.to, 'MM월 dd일')}</p>
        </>
      );
    }
  }

  return (
    <>
      {useSingleDate ? (
        <>
          <DayPicker
            mode="single"
            locale={ko}
            selected={selected}
            onSelect={setSelected}
            fromMonth={fromMonth}
            toMonth={toMonth}
            defaultMonth={today}
            disabled={sDisabledDays}
          />
        </>
      ) : (
        <>
          <DayPicker
            mode="range"
            locale={ko}
            {...(searchAll ? {} : { selected: range, onSelect: setRange })}
            fromMonth={fromMonth}
            toMonth={toMonth}
            footer={
              searchAll ? (
                <div className="flex flex-col mt-5">
                  <span className="mb-3 text-text-disabled">
                    입실 희망 날짜
                  </span>
                  <div className="flex items-center text-text-disabled">
                    <p className={leftFooterStyle}>시작 날짜</p>
                    <MidLineIcon />
                    <p className={`${rightFooterStyle} text-text-disabled`}>
                      종료 날짜
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col mt-5">
                  <span className="mb-3">입실 희망 날짜</span>
                  <div className="flex items-center">{footer}</div>
                </div>
              )
            }
            defaultMonth={today}
            disabled={searchAll ? disableAll : rDisabledDay}
          />
        </>
      )}
    </>
  );
};

export default CalendarComponent;
