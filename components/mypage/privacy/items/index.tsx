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
    <div key={item.title} className="flex gap-2 text-t3 font-medium">
      <p className="text-text-sub">{item.title}</p>
      <div className="">{item.function(personalData[item.key])}</div>
    </div>
  );
};

export default PrivacyItems;
