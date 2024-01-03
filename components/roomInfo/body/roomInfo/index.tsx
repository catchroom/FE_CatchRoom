import React from 'react';
import ItemCheckInComponent from './itemCheckIn';
import ItemDetailComponent from './itemDetails';
import SellerNoteComponent from './sellerNote';

const RoomInfoComponent = () => {
  return (
    <div className="w-full py-8 px-5 bg-white">
      {/* 숙소상품 상세설명 컴포넌트 */}
      <ItemDetailComponent />
      {/* 체크인 컴포넌트 (공동컴포넌트 사용) */}
      <ItemCheckInComponent />
      {/* 판매자 추가설명 */}
      <SellerNoteComponent />
    </div>
  );
};

export default RoomInfoComponent;
