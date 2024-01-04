import React from 'react';
import DefaultBtn from '../../common/defaultBtn';

const productInfo = async () => {
  return (
    <div className="bg-white w-full h-18 flex content-center items-center px-5 py-3 border-solid border border-borderSub mt-0 sticky top-0">
      <img src="/productImage.png" className="pr-3"></img>
      <div className="flex flex-col">
        <div className="w-full pr-2 pb-2 text-sm">제주신라호텔</div>
        <div className="font-semibold text-xs">100,000원</div>
      </div>
      <DefaultBtn label="가격 제안하기" theme="basic" />
    </div>
  );
};

export default productInfo;
