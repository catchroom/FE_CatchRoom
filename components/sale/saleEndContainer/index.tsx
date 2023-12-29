import Image from 'next/image';
import React from 'react';
import calendarIcon from '/public/calendar.svg';

const SaleEndContainer = () => {
  return (
    <div className="w-[355px] flex flex-col mt-5">
      <h2 className="text-t1 font-bold">판매 종료일 설정</h2>
      <div className="flex">
        <Image src={calendarIcon} alt="달력아이콘" />
        <button>게시 종료일 12/03 23:59</button>
      </div>
    </div>
  );
};

export default SaleEndContainer;
