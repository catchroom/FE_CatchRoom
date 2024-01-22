import WishListDivider from '@/components/mypage/divider/wishListDivider';
import WishListHeartControl from '@/components/mypage/items/wishListHeartControl';
import { ITEMS_INFO } from '@/constants/catchItems';
import React from 'react';

const WishList = () => {
  return (
    <WishListDivider>
      {ITEMS_INFO.roomItems.map((item) => {
        return <WishListHeartControl key={item.roomName} item={item} />;
      })}
    </WishListDivider>
  );
};

export default WishList;
