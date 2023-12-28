import SelectBoxButton from '@/components/common/selectBoxButton';
import React from 'react';

const page = async () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-14 flex p-4 items-center justify-center bg-gray-100 text-xl border-gray-300 border-b-2 text-h2 font-extrabold">
        숙소 검색
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className=" w-full flex flex-col pt-8 p-4 items-center bg-white text-xl">
          <SelectBoxButton icon="pin" placeholder="지역" />
          <SelectBoxButton icon="calendar" placeholder="날짜" />
          <SelectBoxButton icon="person" placeholder="인원 수" />
          <SelectBoxButton icon="house" placeholder="숙소 종류" />
        </div>
        <div className="w-full flex pt-8 p-4 justify-center">
          <button className="w-full h-12 my-2 bg-black text-base text-white">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
