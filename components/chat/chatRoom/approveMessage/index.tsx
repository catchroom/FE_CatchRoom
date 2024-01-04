import React from 'react';

const appoveMessage = async () => {
  return (
    <div className="w-3/4 flex items-end mr-auto mb-3 ">
      <div className="bg-white w-3/4 h-30 flex flex-col items-center border-solid border border-gray-300 rounded-sm ">
        <img src="/productImage.png" className="w-full h-24 object-cover"></img>
        <div className="float-right w-full p-4">
          <p className="text-t2 font-semibold">제안이 승인됐어요</p>
          <p className="py-2 text-p2 text-gray-500">
            아래 결제하기 버튼을 통해 결제를 진행해주세요. (변경된 금액은 해당
            채팅창 내에서만 유효합니다.)
          </p>
          <button className="w-full bg-main mt-3 p-2 text-p2 font-bold text-white rounded-sm">
            <span>90,000원 </span>결제하기
          </button>
        </div>
      </div>
      <p className="w-1/4 ml-2 text-gray-500 text-t3">오후 7:36</p>
    </div>
  );
};

export default appoveMessage;
