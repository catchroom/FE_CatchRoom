import {
  DAY_TIME,
  hourState,
  minuteState,
  timeState,
} from '@/atoms/sale/timeAtom';
import { useLongPress } from '@/hooks/useLongPress';
import DownArrowIcon from '@/public/svgComponent/downArrow';
import UpArrow from '@/public/svgComponent/upArrow';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const SetTime = () => {
  const [time, setTime] = useRecoilState(timeState);
  const [hour, setHour] = useRecoilState(hourState);
  const [minute, setMinute] = useRecoilState(minuteState);
  const [isTimeChange, setIsTimeChange] = useState(false);

  const toggleTime = () => {
    setTime((prev) => (prev === DAY_TIME[0] ? DAY_TIME[1] : DAY_TIME[0]));
  };

  const increaseHour = () =>
    setHour((prevHour) => {
      if (prevHour === 11) {
        setIsTimeChange(true);
        return 0;
      } else return prevHour + 1;
    });
  const increaseMinute = () =>
    setMinute((prevMinute) => (prevMinute === 59 ? 0 : prevMinute + 1));

  const decreaseHour = () =>
    setHour((prevHour) => {
      if (prevHour === 1) {
        setIsTimeChange(true);
        return 0;
      } else if (prevHour === 0) return 11;
      else return prevHour - 1;
    });
  const decreaseMinute = () =>
    setMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));

  const IncreaseHourLongPress = useLongPress(increaseHour, 300);
  const decreaseHourLongPress = useLongPress(decreaseHour, 300);
  const IncreaseMinuteLongPress = useLongPress(increaseMinute, 300);
  const decreaseMinuteLongPress = useLongPress(decreaseMinute, 300);

  useEffect(() => {
    if (isTimeChange) toggleTime();
    setIsTimeChange(false);
  }, [isTimeChange]); // Only re-run the effect if hour changes
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
          <div {...decreaseHourLongPress} onClick={decreaseHour}>
            <UpArrow />
          </div>

          <p>{hour < 10 ? '0' + hour.toString() : hour}</p>
          <div {...IncreaseHourLongPress} onClick={increaseHour}>
            <DownArrowIcon color="#9FA3AB" />
          </div>
        </div>
        <div className="flex items-center justify-center">:</div>
        <div className="flex flex-col gap-8 items-center">
          <div {...decreaseMinuteLongPress} onClick={decreaseMinute}>
            <UpArrow />
          </div>

          <p>{minute < 10 ? '0' + minute.toString() : minute}</p>
          <div {...IncreaseMinuteLongPress} onClick={increaseMinute}>
            <DownArrowIcon color="#9FA3AB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetTime;
