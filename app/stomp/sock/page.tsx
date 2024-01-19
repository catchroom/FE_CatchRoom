'use client';

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
// import { loadedChatMessage } from '@/api/chat/api';
// test 완료되면 지우도록 하겠습니다

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

type Content = {
  type: 'ENTER' | 'TALK' | 'QUIT';
  message: string;
  sender: string;
  roomId: string;
  userId: string;
};

const StompPage = () => {
  const [message, setMessage] = useState<Content[]>([]);
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
          userId: 'user1',
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
    <>
      {message.map((item, index) => (
        <div key={index}>
          {item.sender} : {item.message}
        </div>
      ))}
      <button className="bg-mint" onClick={sendMessage}>
        채팅 보내기
      </button>
    </>
  );
};

export default StompPage;
