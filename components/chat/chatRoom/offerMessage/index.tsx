import React from 'react';

const OfferMessage = async () => {
  return (
    <div className="w-3/4 flex items-end ml-auto mb-3 ">
      <p className="w-1/4 mr-2 text-gray-500 text-t3">오후 7:33</p>
      <div className="w-3/4 bg-white h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm">
        <img src="/productImage.png" className="w-full h-28 object-cover"></img>
        <div className="float-right w-full p-5">
          <p className="text-t2 font-semibold pb-2">가격을 제안했어요</p>
          <p className="text-p2 text-gray-500">
            승인 금액: <span>90,000원</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferMessage;
