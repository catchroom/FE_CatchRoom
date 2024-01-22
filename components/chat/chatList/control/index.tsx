'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';

const ChatConrol = ({ children }: { children: ReactNode }) => {
  const [ws, setWs] = useState<CompatClient | null>(null);
  const setChatList = useSetRecoilState(chatAllRoomAtom);
  const [cookies] = useCookies();

  console.log(ws);
  const accessToken = cookies.accessToken;
  const userId = cookies.id;

  const connect = () => {
    setWs(null);
    setChatList([]);
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const ws = Stomp.over(() => sockjs);

    setWs(ws);

    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/roomlist/${userId}`, (message) => {
          const recv = JSON.parse(message.body);
          setChatList(recv);
        });
      },
    );
  };

  const disconnect = () => {
    if (!ws) return;
    ws.unsubscribe(`/sub/chat/roomlist/${userId}`);
    ws.disconnect(() => {
      console.log('웹소켓 연결이 종료되었습니다.');
    });
    console.log('웹소켓 연결이 종료되었습니다.');
    console.log(ws);
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return <div className="w-full h-full">{children}</div>;
};

export default ChatConrol;
