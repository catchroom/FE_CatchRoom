import React from 'react';
import SellingPriceBtn from '../sellingPriceBtn';

const SellingPriceContainer = () => {
  return (
    <div className="flex flex-col w-[355px] mt-5">
      <h2 className="text-p1 font-bold">판매가 설정</h2>
      <div className="grid grid-cols-5 gap-4 mt-1">
        <SellingPriceBtn percent={30} />
        <SellingPriceBtn percent={40} />
        <SellingPriceBtn percent={50} />
        <SellingPriceBtn percent={60} />
        <SellingPriceBtn percent={70} />
        <SellingPriceBtn percent={80} />
        <SellingPriceBtn percent={90} />
      </div>
      <div className="text-p3 mt-2">
        <span className="text-pink-600 font-bold">캐치특가란?</span> 구매가 대비
        할인률 50% 이상 설정시 캐치특가로 분류되어 홈 상담에 노출되며 판매
        수수료 5%가 면제됩니다.
      </div>
    </div>
  );
};

export default SellingPriceContainer;
