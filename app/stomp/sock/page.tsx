'use client';

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

// test 완료되면 지우도록 하겠습니다

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

type Content = {
  type: 'ENTER' | 'TALK' | 'LEAVE';
  message: string;
  sender: string;
  roomId: string;
  userId: string;
};

const StompPage = () => {
  const [message, setMessage] = useState<Content[]>([]);

  const connect = () => {
    const sockjs = new SockJS('http://13.124.240.142:8080/ws-stomp');
    const ws = Stomp.over(sockjs);

    // eslint-disable-next-line
    ws.connect({}, (frame: any) => {
      console.log('connected');
      ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
        const recv = JSON.parse(message.body);
        console.log(recv);
        setMessage((prev) => [...prev, recv]);
      });

      ws.publish({
        destination: `/pub/chat/message`,
        body: JSON.stringify({
          roomId: ROOMID,
          sender: 'test',
          type: 'ENTER',
          userId: 'user1',
          message: '소켓 연결 성공!',
        }),
      });

      ws.publish({
        destination: `/pub/chat/message`,
        body: JSON.stringify({
          roomId: ROOMID,
          sender: 'test',
          type: 'TALK',
          userId: 'user1',
          message: '소켓 연결 성공! 메세지 보냅니다 :D',
        }),
      });
    });
  };

  useEffect(() => {
    connect();
    return () => {
      console.log('disconnect');
    };
  }, []);

  return (
    <>
      {message.map((item, index) => (
        <div key={index}>
          {item.sender} : {item.message}
        </div>
      ))}
    </>
  );
};

export default StompPage;
