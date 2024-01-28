'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useCookies } from 'react-cookie';

// test 완료되면 지우도록 하겠습니다

const ROOMID = '9539df9d-d9aa-44ac-80b9-8805ce0fc7d7';

type Content = {
  type: 'ENTER' | 'TALK' | 'LEAVE';
  message: string;
  sender: string;
  roomId: string;
  userId: number;
};

const StompPage = ({ children }: { children: ReactNode }) => {
  const [ws, setWs] = useState<CompatClient | null>(null); // 가장 중요한 부분
  const [cookies] = useCookies();
  const accessToken = cookies.accessToken;
  const [message, setMessage] = useState<Content[]>([]);

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp');
    const ws = Stomp.over(sockjs);
    setWs(ws);

    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
          const recv = JSON.parse(message.body);
          setMessage((prev) => [...prev, recv]);
        });

        ws.publish({
          destination: `/pub/chat/message`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            roomId: ROOMID,
            sender: '민섭',
            type: 'ENTER',
            userId: 4,
          }),
        });
      },
    );
  };

  const disconnect = () => {
    if (!ws) return;
    ws.disconnect();
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
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
        sender: '민섭',
        type: 'TALK',
        userId: 4,
        message: '이게 마지막 메세지입니당근',
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
        message: '네고 오케이 콜',
        sender: '네고왕김네고',
        userId: 6,
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
      <div>{children}</div>
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
