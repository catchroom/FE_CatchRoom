import React from 'react';
import { CheckInComponentProps } from '@/types/common/checkInComponent/types';

/**
 * 개별 상품의 체크인-체크아웃 날짜를 확인할 수 있는 컴포넌트입니다.
 *
 * props로 checkInDate, CheckInTime, CheckOutDate, CheckOutTime 네가지를 입력받아야 합니다.
 *
 * 날짜는 `년-월-일 (요일)`순으로, 시간은 24시간제로 표기되어야 합니다.
 *
 * @props {string} checkInDate - 숙소의 체크인 날짜 입니다.`기본값 : 2099-00-00 (월)`
 * @props {string} CheckInTime - 숙소의 체크인 시각입니다. `기본값 : 00:00`
 * @props {string} CheckOutDate - 숙소의 체크아웃 날짜 입니다. `기본값 : 2099-00-00 (월)`
 * @props {string} CheckOutTime - 숙소의 체크아웃 시각입니다. `기본값 : 00:00`
 * @returns {JSX.Element} CheckInDateComponent 컴포넌트 반환
 */

const CheckInDateComponent = ({
  checkInDate = '2099-00-00 (월)',
  CheckInTime = '00:00',
  CheckOutDate = '2099-00-00 (월)',
  CheckOutTime = '00:00',
}: CheckInComponentProps) => {
  return (
    <>
      <div className="relative flex flex-wrap w-full h-[5.625rem] mt-2 items-center justify-around gap-0 bg-gray-250">
        <div className="text-center">
          <div className="text-p1 font-medium text-gray-600">체크인</div>
          <div className="text-p1 font-semibold text-gray-800">
            {checkInDate}
          </div>
          <div className="text-p1 font-semibold text-gray-800">
            {CheckInTime}
          </div>
        </div>
        <div className="absolute h-[2.3125rem] w-[0.0625rem] bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="text-center">
          <div className="text-p1 font-medium text-gray-600">체크아웃</div>
          <div className="text-p1 font-semibold text-gray-800">
            {CheckOutDate}
          </div>
          <div className="text-p1 font-semibold text-gray-800">
            {CheckOutTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckInDateComponent;
