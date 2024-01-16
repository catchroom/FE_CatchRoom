'use client';
import React from 'react';
import BottomSheets from '@/components/common/bottomSheets';
import SetTime from '../setTime';
import { useRecoilValue } from 'recoil';
import { hourState, minuteState, timeState } from '@/atoms/sale/timeAtom';

const SaleEndContainer = () => {
  const time = useRecoilValue(timeState);
  const hour = useRecoilValue(hourState);
  const minute = useRecoilValue(minuteState);

  const title =
    '12월 28일 (수) ' +
    time.toString() +
    ' ' +
    hour.toString() +
    ' ' +
    minute.toString();
  return (
    <div className="w-full flex flex-col mt-5 gap-3">
      <h2 className="text-h5 font-semibold">판매 종료일 설정</h2>
      <p className="text-p1 opacity-50 mt-1">
        판매 종료일 이후 판매글은 미노출 됩니다
      </p>
      <BottomSheets buttonSelect="calendar" title={title}>
        <SetTime />
      </BottomSheets>
    </div>
  );
};

export default SaleEndContainer;
