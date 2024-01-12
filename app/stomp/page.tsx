'use client';

import React, { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import Stomp from '@stomp/stompjs';

type Content = {
  type: 'ENTER' | 'TALK' | 'LEAVE';
  message: string;
  roomId: string;
  userId: string;
};

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

const stomp = new Client({
  brokerURL: 'ws://13.124.240.142:8080',

  debug: (str) => {
    console.log(str);
    console.log('debug');
  },
  reconnectDelay: 10000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

const StompPage = () => {
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    const initializeChat = async () => {
      setStompClient(stomp);

      stomp.onStompError = (frame) => {
        console.log('Broker reported error: ' + frame.headers['message']);
        console.log('Additional details: ' + frame.body);
      };

      console.log('connecting');
      stomp.activate();

      stomp.onConnect = () => {
        console.log('connected');
        const subscriptionDestination = '/sub/chat/room/' + ROOMID;

        // 이저

        stomp.subscribe(subscriptionDestination, (message) => {
          const parsedMessage = JSON.parse(message.body);
          console.log(parsedMessage);

          setContent((prev) => [...prev, parsedMessage]);
        });
      };
    };

    initializeChat();

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, [stompClient]);

  const sendMessage = () => {
    if (stompClient && stompClient.connected) {
      const destination = '/pub/chat/message';
      const message = {
        type: 'TALK',
        message: '안녕하세요',
        roomId: ROOMID,
        sender: 'feTestUser',
        userId: 'feTestUser',
      };

      stompClient.publish({ destination, body: JSON.stringify(message) });
    }
  };

  console.log(content);
  return (
    <div>
      page
      <button className="p-3 bg-main" onClick={sendMessage}>
        버튼
      </button>
    </div>
  );
};

export default StompPage;
