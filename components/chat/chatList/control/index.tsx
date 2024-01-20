'use client';

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
// import ChatItem from '../../chatItem';
import { useCookies } from 'react-cookie';
import { ChatRoomType } from '@/types/chat/chatRoom/types';
import ChatItem from '../../chatItem';

const ChatList = () => {
  const [ws, setWs] = useState<CompatClient | null>(null);
  const [room, setRoom] = useState<ChatRoomType[]>([]);
  const [cookies] = useCookies();

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    const ws = Stomp.over(sockjs);

    setWs(ws);

    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/roomlist/4`, (message) => {
          const recv = JSON.parse(message.body);
          setRoom(recv);
        });

        ws.publish({
          destination: `/pub/chat/message`,
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
          body: JSON.stringify({
            roomId: '4',
            sender: '민섭',
            type: 'ENTER',
            userId: '4',
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

  console.log(room);

  return (
    <div className="w-full h-full">
      {room &&
        room.map((item: ChatRoomType, index: number) => {
          return <ChatItem key={index} item={item} />;
        })}
    </div>
  );
};

export default ChatList;
