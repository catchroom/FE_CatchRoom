'use client';

import { useToastAlert } from '@/hooks/useToastAlert';
import React, { useState } from 'react';
import { ItemType } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { getDotDate } from '@/utils/get-dot-date';
import { deleteHeart } from './../../../../api/mypage/api';

const WishListHeartControl = ({ item }: { item: ItemType }) => {
  const { alertOpenHandler } = useToastAlert('찜을 취소했어요.');
  const [heartState, setHeartState] = useState(true);

  const heartBtnHandler = () => {
    setHeartState(!heartState);
    deleteHeart(item.wishId).then((res) => console.log(res));
    alertOpenHandler();
  };

  return (
    <CatchSpecialComponent
      key={item.wishId}
      accommodationName={item.accommodationName}
      roomName={item.roomName}
      resDate={`${getDotDate(item.checkIn)} - ${getDotDate(item.checkOut)}`}
      originalPrice={item.sellPrice}
      sellPrice={item.discountPrice}
      discountRate={item.discountRate}
      isHeart={true}
      heartState={heartState}
      heartBtnHandler={heartBtnHandler}
      catchType={false}
    />
  );
};

export default WishListHeartControl;
