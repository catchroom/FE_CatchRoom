import React from 'react';
import Send from '@/public/send.svg';

const send = async () => {
  return (
    <div className="bg-white w-full h-20 flex items-center px-4 py-3 pb-6 border-solid border border-borderSub sticky bottom-0">
      <input
        className="bg-gray-200 w-full h-full flex px-4 rounded-full "
        placeholder="메시지 보내기"
      />
      <div className="pl-3">
        <Send />
      </div>
    </div>
  );
};

export default send;
