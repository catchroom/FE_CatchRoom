import React from 'react';
import RateIcon from './rateIcon';

const ItemDetailComponent = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-start">
        <div className="flex flex-wrap items-center">
          <p className="text-h5 font-bold mr-2">제주신라호텔</p>
          <p className="text-p3 font-bold bg-gray-300 p-1 px-2">
            스탠다드 더블
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start mt-2">
        <div className="flex flex-wrap text-p2 text-gray-600">
          <span>구매가&nbsp;</span>
          <p className="line-through">300,000원</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start">
        <div className="flex flex-wrap items-center">
          <p className=" text-main font-normal">30%</p>
          <p className="ml-2 text-h4 font-semibold">180,000원</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start">
        <div className="flex flex-wrap mt-1 items-center">
          <RateIcon />
          <p className=" text-rate font-bold">4.5&nbsp;(1,234)</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetailComponent;
