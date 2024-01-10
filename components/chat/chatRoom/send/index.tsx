'use client';
import React, { useRef } from 'react';
import SendIcon from '@/public/send.svg';

const Send = () => {
  const textarea = useRef(null);

  const resizeHeight = (textarea: React.RefObject<HTMLTextAreaElement>) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  return (
    <div className="bg-white w-full h-full flex items-center px-4 py-3 pb-6 border border-border-sub sticky bottom-0">
      <textarea
        className="bg-gray-200 w-full h-[40px] max-h-[120px] py-[8px] flex px-4 rounded-[20px]"
        placeholder="메시지 보내기"
        rows={1}
        ref={textarea}
        onChange={() => resizeHeight(textarea)}
      />
      <div className="pl-3">
        <SendIcon />
      </div>
    </div>
  );
};

export default Send;
