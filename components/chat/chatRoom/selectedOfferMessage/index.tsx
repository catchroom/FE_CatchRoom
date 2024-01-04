import React from 'react';
import DefaultBtn from '../../common/defaultBtn';

const selectedOfferMessage = async () => {
  return (
    <div className="w-3/4 flex items-end mr-auto mb-5">
      <div className="w-3/4 bg-white w-56 h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm">
        <img
          src="/productImage.png"
          className="w-full h-28  object-cover"
        ></img>
        <div className="float-right w-full p-4 ">
          <p className="text-t2 font-semibold pb-2">가격을 제안했어요</p>
          <p className="text-p2 text-gray-500">
            요청 금액: <span>90,000원</span>
          </p>
        </div>
        <div className="flex w-full gap-1 px-4 pb-4">
          <DefaultBtn label="거절하기" theme="secondary" />
          <DefaultBtn label="승인하기" theme="primary" />
        </div>
      </div>
      <p className="w-1/4 ml-2 text-gray-500 text-t3">오후 7:36</p>
    </div>
  );
};

export default selectedOfferMessage;
