import Image from 'next/image';
import React from 'react';

const SaleButton = () => {
  return (
    <div className="flex gap-1 p-3 rounded-3xl bg-main text-white">
      <Image src="/svg/plus.svg" width={24} height={24} alt="플러스 아이콘" />
      <div className="text-t2 font-bold">숙박권 판매</div>
    </div>
  );
};

export default SaleButton;
