'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useRecoilState } from 'recoil';
import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
// import { loadedChatMessage } from '@/api/chat/api';
// test 완료되면 지우도록 하겠습니다

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

export type ChatContentType = {
  type: 'ENTER' | 'TALK' | 'QUIT' | 'NEGO_REQ' | 'NEGO_ALLOW' | 'NEGO_DENIED ';
  message: string;
  sender: string;
  roomId: string;
  userId: number;
  time: string;
};

const StompPage = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] =
    useRecoilState<ChatContentType[]>(chatContentAtom);
  const [ws, setWs] = useState<CompatClient | null>(null);

  const connect = () => {
    const sockjs = new SockJS('http://13.124.240.142:8080/ws-stomp');
    console.log(sockjs);
    const ws = Stomp.over(sockjs);
    console.log(ws);

    setWs(ws);

    // eslint-disable-next-line
    ws.connect({}, () => {
      ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
        const recv = JSON.parse(message.body);
        setMessage((prev) => [...prev, recv]);
      });

      ws.publish({
        destination: `/pub/chat/message`,
        body: JSON.stringify({
          roomId: ROOMID,
          sender: '승연',
          type: 'ENTER',
          userId: 'user2',
          message: '소켓 연결 성공!',
        }),
      });
    });
  };

  useEffect(() => {
    connect();
    return () => {
      ws?.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  const negoMessage = () => {
    if (!ws) return;
    ws.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        roomId: ROOMID,
        sender: '민섭',
        type: 'NEGO_REQ',
        negoPrice: 10000,
        message: '네고해주세요',
      }),
    });
  };

  return (
    <>
      {message.map((item, index) => (
        <div key={index}>
          {item.sender} : {item.message}
        </div>
      ))}
      {children}
      <div className="w-full flex justify-between">
        <button className="bg-mint" onClick={negoMessage}>
          민섭 채팅 보내기
        </button>
      </div>
    </>
  );
};

export default StompPage;
