'use client';

import { useToastAlert } from '@/hooks/useToastAlert';
import React, { useState } from 'react';
import { RoomItemType } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';

const WishListHeartControl = ({ item }: { item: RoomItemType }) => {
  const { alertOpenHandler } = useToastAlert('찜을 취소했어요.');
  const [heartState, setHeartState] = useState(true);

  const heartBtnHandler = () => {
    setHeartState(!heartState);
    alertOpenHandler();
  };

  return (
    <CatchSpecialComponent
      key={item.roomName}
      roomName={item.roomName}
      roomType={item.roomType}
      resDate={item.resDate}
      oldPrice={item.oldPrice}
      discount={item.discount}
      isHeart={true}
      heartState={heartState}
      heartBtnHandler={heartBtnHandler}
    />
  );
};

export default WishListHeartControl;
