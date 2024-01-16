'use client';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { ITEMS_INFO } from '@/constants/catchItems';
import { useProductInfoPage } from '@/hooks/useProductInfoPage';
import React from 'react';

const ItemsComponent = () => {
  const { pageHandler } = useProductInfoPage();

  return (
    <div className=" overflow-y-hidden">
      <div className="w-full flex flex-col mt-56 gap-12 p-6 pt-2">
        {ITEMS_INFO.roomItems.map((item) => {
          return (
            <CatchSpecialComponent
              key={item.id}
              pageHandler={() => pageHandler()}
              roomName={item.roomName}
              roomType={item.roomType}
              resDate={item.resDate}
              oldPrice={item.oldPrice}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemsComponent;
