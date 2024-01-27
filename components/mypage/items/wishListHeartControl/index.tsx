'use client';

import { useToastAlert } from '@/hooks/useToastAlert';
import React, { useState } from 'react';
import { ItemType } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { deleteHeart } from './../../../../api/mypage/api';
import { useRouter } from 'next/navigation';
import { useQueryGetRoomInfo } from '@/api/mypage/query';

const WishListHeartControl = ({ item }: { item: ItemType }) => {
  const router = useRouter();
  const { alertOpenHandler } = useToastAlert('찜을 취소했어요.');
  const [heartState, setHeartState] = useState(true);
  const { data } = useQueryGetRoomInfo(item.productId);

  const heartBtnHandler = () => {
    setHeartState(!heartState);
    deleteHeart(item.wishId).then((res) => console.log(res));
    alertOpenHandler();
  };

  const pageHandler = () => {
    router.push(`/room-info/${item.productId}`);
  };

  return (
    <>
      {heartState && (
        <CatchSpecialComponent
          key={item.wishId}
          image={data?.accommodationUrl[0].url}
          accommodationName={item.accommodationName}
          roomName={item.roomName}
          checkIn={item.checkIn}
          checkOut={item.checkOut}
          originalPrice={item.sellPrice}
          sellPrice={item.discountPrice}
          discountRate={item.discountRate}
          pageHandler={pageHandler}
          isHeart={true}
          heartState={heartState}
          heartBtnHandler={heartBtnHandler}
          catchType={false}
        />
      )}
    </>
  );
};

export default WishListHeartControl;
