import React from 'react';
import { ITEMS_INFO } from '@/constants/catchItems';
import CatchSpecialComponent from '@/components/common/catchComponent';

const CatchItemContainer = () => {
  return (
    <div className=" overflow-y-hidden">
      <div className="w-full flex flex-col gap-12 px-6">
        {ITEMS_INFO.roomItems.map((item) => {
          return (
            <CatchSpecialComponent
              key={item.roomName}
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

export default CatchItemContainer;
