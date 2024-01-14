import CheckInDateComponent from '@/components/common/checkInDateComponent';
import React from 'react';

const ItemCheckInComponent = () => {
  // 받아와야 할 데이터
  // (체크인 날짜(월,일,요일), 체크아웃 날짜(월,일,요일))
  return (
    <>
      <CheckInDateComponent
        CheckInDate="01.01 (월)"
        CheckOutDate="01.03 (월)"
      />
    </>
  );
};

export default ItemCheckInComponent;
