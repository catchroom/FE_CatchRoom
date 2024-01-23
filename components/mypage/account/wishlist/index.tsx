'use client';

import WishListDivider from '@/components/mypage/divider/wishListDivider';
import WishListHeartControl from '@/components/mypage/items/wishListHeartControl';
import React from 'react';
import { useQueryGetWishlist } from './../../../../api/mypage/query';
import { RoomItemType } from '@/constants/catchItems';

const WishList = () => {
  const { data } = useQueryGetWishlist();

  return (
    <WishListDivider>
      {data &&
        data.map((item: RoomItemType) => {
          return (
            <WishListHeartControl key={item.accommodationName} item={item} />
          );
        })}
    </WishListDivider>
  );
};

export default WishList;
