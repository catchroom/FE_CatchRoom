'use client';
import React from 'react';
import SetTime from '../setTime';
import { useRecoilValue } from 'recoil';
import { hourState, minuteState, timeState } from '@/atoms/sale/timeAtom';
import BottomSheets from '@/components/common/bottomSheets';
import CalendarComponent from '@/components/common/calendar';
import { singleDate } from '@/atoms/calendar/calendarAtoms';
const SaleEndContainer = () => {
  const time = useRecoilValue(timeState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);

  const selected = useRecoilValue(singleDate);

  console.log(selected);

  const title =
    selected?.toLocaleDateString() +
    ' ' +
    time.toString() +
    ' ' +
    (hour < 10
      ? '0' + hour.toString() + ':' + minute.toString()
      : hour.toString() + ':' + minute.toString());

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
        innerButtonTitle={title}
      >
        <div className="w-full flex flex-col">
          <div className="w-full h-[480px]">
            <CalendarComponent useSingleDate={true} />
          </div>
          <SetTime />
        </div>
      </BottomSheets>
    </div>
  );
};

export default SaleEndContainer;
