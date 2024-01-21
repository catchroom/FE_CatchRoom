import { chatContentAtom } from '@/atoms/chat/chatContentAtom';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useChatConnection = (roomId: string) => {
  const [ws, setWs] = useState<CompatClient | null>(null);
  const setChatList = useSetRecoilState(chatContentAtom);
  const [cookies] = useCookies();

  const userId = cookies.userId;
  const accessToken = cookies.accessToken;

  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const ws = Stomp.over(sockjs);

    setWs(ws);

    ws.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          const recv = JSON.parse(message.body);
          console.log('새로운 메세지 도착');
          setChatList((prev) => [...prev, recv]);
        });

        ws.publish({
          destination: `/pub/chat/message`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            roomId: roomId,
            sender: '민섭',
            type: 'ENTER',
            userId: userId,
            message: '안녕하세요',
          }),
        });
      },
    );
  };

  const disconnect = () => {
    if (!ws) return;
    ws?.disconnect();
  };

  const sendMessage = (message: string) => {
    if (!ws) return;
    ws.publish({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      destination: `/pub/chat/message`,
      body: JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        message: message,
        sender: '네고왕김네고',
        userId: userId,
        negoPrice: -1,
      }),
    });
  };

  return { connect, disconnect, ws, sendMessage };
};
