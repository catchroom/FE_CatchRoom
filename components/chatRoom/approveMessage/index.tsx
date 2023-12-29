import React from 'react';

const appoveMessage = async () => {
  return (
    <div className="flex items-end mr-auto mb-5 ml-5">
      <div className="bg-white w-56 h-30 flex flex-col items-center border-solid border border-black mr-auto">
        <img src="/productImage.png" className="w-full h-24 object-cover"></img>
        <div className="float-right w-full p-4">
          <p>제안이 승인됐어요</p>
          <p className="text-sm text-grey">
            아래 결제하기 버튼을 통해 결제를 진행해주세요. (변경된 금액은 해당
            채팅창 내에서만 유효합니다.)
          </p>
          <button className="w-full border-solid border border-black mt-3 p-1 text-sm">
            결제하기
          </button>
        </div>
      </div>
      <p className="ml-2 text-grey text-sm ">오후 7:36</p>
    </div>
  );
};

export default appoveMessage;
