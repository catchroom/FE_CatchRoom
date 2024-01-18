'use client';

import React, { useRef, useState } from 'react';
import SendIcon from '@/public/svgComponent/sendIcon';

type sendProps = {
  onSendMessage: (message: string) => void;
};

const Send: React.FC<sendProps> = ({ onSendMessage }) => {
  // textarea 높이 조절
  const textarea = useRef(null);
  const resizeHeight = (textarea: React.RefObject<HTMLTextAreaElement>) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  const [message, setMessage] = useState<string>('');

  //textarea 입력 내용 반영
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    resizeHeight(textarea);
  };

  //메시지 보내기
  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage(''); // 메시지 보낸 후에 입력 필드 초기화
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white w-full h-auto flex items-center px-4 py-3 border border-border-sub sticky bottom-0">
      <textarea
        className="bg-gray-200 w-full h-[40px] max-h-[120px] py-[8px] flex px-4 rounded-[20px]"
        placeholder="메시지 보내기"
        rows={1}
        ref={textarea}
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="pl-3 cursor-pointer" onClick={handleSendMessage}>
        <SendIcon />
      </div>
    </div>
  );
};

export default Send;
