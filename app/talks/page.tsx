'use client';

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useCookies } from 'react-cookie';

// test 완료되면 지우도록 하겠습니다

const ROOMID = '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d';

type Content = {
  type: 'ENTER' | 'TALK' | 'LEAVE';
  message: string;
  sender: string;
  roomId: string;
  userId: number;
};

const StompPage = () => {
  const [cookies] = useCookies();
  const accessToken = cookies.accessToken;
  const [message, setMessage] = useState<Content[]>([]);
  const [ws, setWs] = useState<CompatClient | null>(null);

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp');
    const ws = Stomp.over(sockjs);

    setWs(ws);

    console.log('connect');

    // eslint-disable-next-line
    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/roomlist/4`, (message) => {
          const recv = JSON.parse(message.body);
          setMessage((prev) => [...prev, recv]);
          console.log(recv);
        });

        ws.publish({
          destination: `/pub/chat/message`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            roomId: ROOMID,
            sender: '지운',
            type: 'ENTER',
            userId: 4,
            message: '소켓 연결 성공!',
          }),
        });
      },
    );
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
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        roomId: ROOMID,
        sender: '지운',
        type: 'TALK',
        userId: 4,
        message: '안녕하세용',
      }),
    });
  };

  const sendMessage2 = () => {
    if (!ws) return;
    ws.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'NEGO_REQ',
        roomId: ROOMID,
        message: '네고해요',
        sender: '네고',
        userId: 4,
        negoPrice: 10000,
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
      <div className="w-full flex justify-between">
        <button className="bg-mint" onClick={sendMessage}>
          채팅 보내기
        </button>
        <button className="bg-mint" onClick={sendMessage2}>
          민섭 채팅 보내기
        </button>
      </div>
    </>
  );
};

export default StompPage;
