import CatchSpecialComponent from '@/components/common/catchComponent';
import WishListDivider from '@/components/mypage/divider/wishListDivider';
import { ITEMS_INFO } from '@/constants/catchItems';
import React from 'react';

const page = () => {
  return (
    <WishListDivider>
      {ITEMS_INFO.roomItems.map((item) => {
        return (
          <CatchSpecialComponent
            key={item.roomName}
            roomName={item.roomName}
            roomType={item.roomType}
            resDate={item.resDate}
            oldPrice={item.oldPrice}
            discount={item.discount}
            isHeart={true}
          />
        );
      })}
    </WishListDivider>
  );
};

export default page;
