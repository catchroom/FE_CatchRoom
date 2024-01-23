'use client';
import React from 'react';
import { weekCalendarDate } from '@/atoms/checkInImnt/weekCalendar';
import { useRecoilState } from 'recoil';

const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] =
    useRecoilState<Date>(weekCalendarDate);

  // 오늘 날짜 기준으로 6일 후의 날짜를 계산
  const getDateAfterSixDays = (baseDate: Date) => {
    const sixDaysLater = new Date(baseDate);
    sixDaysLater.setDate(baseDate.getDate() + 6);
    return sixDaysLater;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const dateButtons = (date: Date) => {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const sixDaysLater = getDateAfterSixDays(today);

    const isToday = date.toDateString() === today.toDateString();
    const isSixDaysLater = date.toDateString() === sixDaysLater.toDateString();
    const isSelected = date.getDate() === selectedDate.getDate();

    const buttonClasses = `
      relative flex flex-col items-center font-semibold
      ${isToday ? 'justify-start' : ''}
      ${isSixDaysLater ? 'justify-end' : ''}
    `;

    return (
      <button
        key={date.getDate()}
        className={buttonClasses}
        onClick={() => handleDateClick(date)}
      >
        {isToday && (
          <div className="absolute w-[6px] h-[6px] rounded bg-main z-10" />
        )}
        <p className="text-text-sub mt-[6px] mb-1">{dayNames[date.getDay()]}</p>
        <p
          className={`rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold 
      ${isSelected ? 'bg-black text-white' : ''}`}
        >
          {date.getDate()}
        </p>
      </button>
    );
  };

  // 오늘 날짜부터 6일 후까지의 날짜를 생성
  const dateArray = [...Array(7).keys()].map((_, index) => {
    const today = new Date();
    today.setDate(today.getDate() + index);
    return today;
  });

  return <>{dateArray.map((date) => dateButtons(date))}</>;
};

export default WeekCalendar;
