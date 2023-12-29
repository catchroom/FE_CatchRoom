import React from 'react';

const page = async () => {
  return (
    <div className="h-screen w-full overflow-scroll">
      <div className="bg-white w-full h-18 flex items-center px-4 py-3 border-solid border border-borderSub mb-8">
        <img src="/productImage.png" className="pr-3"></img>
        <div className="flex flex-col">
          <div className="pr-2 pb-2 text-sm">제주신라호텔</div>
          <div className="font-semibold text-xs">100,000원</div>
        </div>
      </div>
      <div className="h-full flex flex-col place-content-between">
        <input
          className="mx-auto flex border-solid border border-black p-5 w-11/12 rounded-xl"
          placeholder="₩ 구매하고 싶은 금액"
        />
        <button className=" mx-auto bg-surfaceGrey text-disabledGrey font-medium  p-5 w-11/12 mb-8 rounded-xl">
          제안하기
        </button>
      </div>
    </div>
  );
};

export default page;
