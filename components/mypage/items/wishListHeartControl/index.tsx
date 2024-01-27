'use client';

import { useToastAlert } from '@/hooks/useToastAlert';
import React, { useState } from 'react';
import { ItemType } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { deleteHeart } from './../../../../api/mypage/api';
import { useRouter } from 'next/navigation';

const WishListHeartControl = ({ item }: { item: ItemType }) => {
  const router = useRouter();
  const { alertOpenHandler } = useToastAlert('찜을 취소했어요.');
  const [heartState, setHeartState] = useState(true);

  const heartBtnHandler = () => {
    setHeartState(!heartState);
    deleteHeart(item.wishId);
    alertOpenHandler();
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push(`/room-info/${item.productId}`);
      }}
    >
      <CatchSpecialComponent
        key={item.wishId}
        accommodationName={item.accommodationName}
        roomName={item.roomName}
        checkIn={item.checkIn}
        checkOut={item.checkOut}
        originalPrice={item.sellPrice}
        sellPrice={item.discountPrice}
        discountRate={item.discountRate}
        isHeart={true}
        heartState={heartState}
        heartBtnHandler={heartBtnHandler}
        catchType={false}
      />
    </div>
  );
};

export default WishListHeartControl;
