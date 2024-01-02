import React from 'react';

const selectedOfferMessage = async () => {
  return (
    <div className="flex items-end ml-auto mb-5 mr-5">
      <p className="mr-2 text-gray-500 text-sm ">오후 7:36</p>
      <div className="bg-white w-56 h-30 flex flex-col items-center border-solid border border-black ml-auto">
        <img src="/productImage.png" className="w-full h-24 object-cover"></img>
        <div className="float-right w-full p-4">
          <p>가격을 제안했어요</p>
          <p className="text-sm text-grey">
            요청 금액: <span>90,000원</span>
          </p>
        </div>
        <div className="flex w-full gap-1 px-4 pb-4">
          <button className="w-full border-solid border border-black p-1 text-sm">
            승인하기
          </button>
          <button className="w-full border-solid border border-black  p-1 text-sm">
            거절하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default selectedOfferMessage;
