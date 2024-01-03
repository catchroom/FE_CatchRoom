import { PrivacyItemsProps } from '@/types/mypage/types';
import React from 'react';

const PrivacyItems = ({
  item,
  personalData,
}: {
  item: PrivacyItemsProps;
  personalData: Record<string, string>;
}) => {
  return (
    <div key={item.title} className="grid grid-cols-3">
      <p className="col-span-1 text-gray-600">{item.title}</p>
      <div className="col-span-2">{item.function(personalData[item.key])}</div>
    </div>
  );
};

export default PrivacyItems;
