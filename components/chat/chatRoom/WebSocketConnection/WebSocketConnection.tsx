import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { MessageProps } from '@/types/chat/chatRoom/types';

const ROOMID = '02d6b08d-60f8-4c21-b5b2-0ba7af752e29';

type WebSocketConnectionProps = {
  onMessageReceived: (message: MessageProps) => void;
};

const WebSocketConnection: React.FC<WebSocketConnectionProps> = ({
  onMessageReceived,
}) => {
  const [ws, setWs] = useState<CompatClient | null>(null);

  const connect = () => {
    const sockjs = new SockJS('http://13.124.240.142:8080/ws-stomp');
    const ws = Stomp.over(sockjs);

    setWs(ws);

    ws.connect({}, () => {
      ws.subscribe(`/sub/chat/room/${ROOMID}`, (message) => {
        const recv: MessageProps = JSON.parse(message.body);
        onMessageReceived(recv);
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

  const sendMessage = (message: string) => {
    if (!ws) return;
    ws.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        roomId: ROOMID,
        sender: '승연',
        type: 'TALK',
        userId: 'user1',
        message: message,
      }),
    });
  };

  return { sendMessage } as { sendMessage: (message: string) => void };
};

export default WebSocketConnection;
