import DownArrowIcon from '@/public/svgComponent/downArrow';
import UpArrow from '@/public/svgComponent/upArrow';
import React, { useState } from 'react';

const dayTime = ['오전', '오후'];

const SetTime = () => {
  const [time, setTime] = useState(dayTime[1]);
  const [hour, setHour] = useState(11); // 초기 시간 설정
  const [minute, setMinute] = useState(59); // 초기 분 설정

  const toggleTime = () => {
    setTime((prev) => (prev === dayTime[0] ? dayTime[1] : dayTime[0]));
  };

  const increaseHour = () =>
    setHour((prevHour) => {
      if (prevHour === 11) {
        toggleTime();
        return 0;
      } else return prevHour + 1;
    });
  const increaseMinute = () =>
    setMinute((prevMinute) => (prevMinute === 59 ? 0 : prevMinute + 1));

  const decreaseHour = () =>
    setHour((prevHour) => {
      if (prevHour === 1) {
        toggleTime();
        return 0;
      } else if (prevHour === 0) return 11;
      else return prevHour - 1;
    });
  const decreaseMinute = () =>
    setMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));
  return (
    <div className="flex justify-between w-full items-center p-5 text-t1">
      <div className=" font-semibold">판매 종료 시간</div>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-8 items-center">
          <div onClick={toggleTime} className="cursor-pointer">
            <UpArrow />
          </div>
          <p>{time}</p>
          <div onClick={toggleTime} className="cursor-pointer">
            <DownArrowIcon color="#9FA3AB" />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div onClick={decreaseHour}>
            <UpArrow />
          </div>

          <p>{hour < 10 ? '0' + hour.toString() : hour}</p>
          <div onClick={increaseHour}>
            <DownArrowIcon color="#9FA3AB" />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div onClick={decreaseMinute}>
            <UpArrow />
          </div>

          <p>{minute < 10 ? '0' + minute.toString() : minute}</p>
          <div onClick={increaseMinute}>
            <DownArrowIcon color="#9FA3AB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetTime;
