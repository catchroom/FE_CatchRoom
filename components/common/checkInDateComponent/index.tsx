import React from 'react';
import { CheckInComponentProps } from '@/types/common/checkInComponent/types';
import { CHECKIN_TIME, CHECKOUT_TIME } from '@/constants/CheckInOut';
import { formatDateWithDay } from '@/utils/get-dot-date';
/**
 * 개별 상품의 체크인-체크아웃 날짜를 확인할 수 있는 컴포넌트입니다.
 * props로 checkInDate, CheckInTime, CheckOutDate, CheckOutTime 네가지를 입력받아야 합니다.
 * 날짜는 `월.일 (요일)`순으로, 시간은 24시간제로 표기되어야 합니다.
 * @props {string} checkInDate - 숙소의 체크인 날짜 입니다.`기본값 : 00.00 (월)`
 * @props {string} CheckOutDate - 숙소의 체크아웃 날짜 입니다. `기본값 : 00.00 (월)`
 * @returns {JSX.Element} CheckInDateComponent 컴포넌트 반환
 */

const CheckInDateComponent = ({
  CheckInDate = '00.00 (월)',
  CheckOutDate = '00.00 (월)',
}: CheckInComponentProps) => {
  const checkInString = formatDateWithDay(CheckInDate);
  const checkOutString = formatDateWithDay(CheckOutDate);
  return (
    <div className="relative flex-col flex px-5 py-4 h-[157px] lg:flex-row lg:flex-wrap md:flex-col sm:flex-col md:items-start sm:items-start md:px-5 md:py-4 sm:px-5 sm:py-4 w-full lg:h-[5.625rem] md:h-[157px] sm:h-[157px] mt-2 lg:items-center lg:justify-around bg-surface-gray rounded-[4px]">
      <div className="lg:text-center md:text-start sm:text-start text-start">
        <div className="text-t3 font-medium text-gray-600 mb-1">체크인</div>
        <div className="text-p1 font-semibold text-gray-800">
          {checkInString} {CHECKIN_TIME}
        </div>
      </div>
      <div className="absolute h-[37px] w-[1px] lg:bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block md:hidden sm:hidden" />
      <div className="lg:text-center  md:text-start lg:mt-0 md:mt-[29px] sm:text-start text-start sm:mt-[29px] mt-[29px]">
        <div className="text-t3 font-medium text-gray-600 mb-1">체크아웃</div>
        <div className="text-p1 font-semibold text-gray-800">
          {checkOutString} {CHECKOUT_TIME}
        </div>
      </div>
    </div>
  );
};

export default CheckInDateComponent;
