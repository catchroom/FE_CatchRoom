import React from 'react';

const productInfo = async () => {
  return (
    <div className="bg-white w-full h-18 flex items-center px-4 py-3 border-solid border border-borderSub mt-0 sticky top-0">
      <img src="/productImage.png" className="pr-3"></img>
      <div className="flex flex-col">
        <div className="pr-2 pb-2 text-sm">제주신라호텔</div>
        <div className="font-semibold text-xs">100,000원</div>
      </div>
      <button className="border text-xs px-2 py-1 ml-auto rounded-full">
        가격 제안하기
      </button>
    </div>
  );
};

export default productInfo;
