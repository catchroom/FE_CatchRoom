import React from 'react';
import ItemCheckInComponent from './itemCheckIn';
import ItemDetailComponent from './itemDetails';
import SellerNoteComponent from './sellerNote';
import PriceComponent from './price';
import IntroduceComponent from './introduce';

const RoomInfoComponent = () => {
  return (
    <div className="w-full p-5 bg-bg">
      {/* 숙소상품 상세설명 컴포넌트 (숙소명, 룸타입, 별점)*/}
      <ItemDetailComponent />
      {/* 체크인 컴포넌트 (체크인 날짜(월,일,요일), 체크아웃 날짜(월,일,요일)) */}
      <ItemCheckInComponent />
      {/* 구매가 & 판매가 컴포넌트 (구매가, 할인률, 판매가)*/}
      <PriceComponent />
      {/* 판매자 한마디 컴포넌트 (판매자 한마디)*/}
      <SellerNoteComponent />
      {/* '캐치룸은 왜 안전할까요?' 컴포넌트 */}
      <IntroduceComponent />
    </div>
  );
};

export default RoomInfoComponent;
