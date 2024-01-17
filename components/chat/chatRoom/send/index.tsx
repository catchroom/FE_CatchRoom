'use client';

import React, { useRef } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import SendIcon from '@/public/send.svg';

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

const Send = () => {
  const textarea = useRef(null);

  const sockjs = new SockJS('http://13.124.240.142:8080/ws-stomp');
  const ws = Stomp.over(sockjs);

  const resizeHeight = (textarea: React.RefObject<HTMLTextAreaElement>) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  const sendMessage = () => {
    if (!ws) return;
    ws.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        roomId: ROOMID,
        sender: '승연',
        type: 'TALK',
        userId: 'user1',
        message: '안녕하세용',
      }),
    });
  };

  return (
    <div className="bg-white w-full h-[50px] flex items-center px-4 py-3 pb-6 border border-border-sub sticky bottom-0">
      <textarea
        className="bg-gray-200 w-full h-[40px] max-h-[120px] py-[8px] flex px-4 rounded-[20px]"
        placeholder="메시지 보내기"
        rows={1}
        ref={textarea}
        onChange={() => resizeHeight(textarea)}
      />
      <div className="pl-3 cursor-pointer" onClick={sendMessage}>
        <SendIcon />
      </div>
    </div>
  );
};

export default Send;
