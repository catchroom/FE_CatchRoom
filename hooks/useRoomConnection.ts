'use client';

import { useGetChatRoom } from '@/api/chat/query';
import { chatAllRoomAtom } from '@/atoms/chat/chatContentAtom';
import { userOutAtom } from '@/atoms/chat/leaveButton';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';

export const useRoomConnection = () => {
  const ws = useRef<CompatClient | null>(null);
  const setChatList = useSetRecoilState(chatAllRoomAtom);
  const setUserOut = useSetRecoilState(userOutAtom);

  const [cookies] = useCookies();

  const accessToken = cookies.accessToken;
  const userId = cookies.userId;

  const { data } = useGetChatRoom(accessToken);

  // 초기 데이터 로딩
  useEffect(() => {
    setUserOut(false);

    if (!data) return;
    setChatList(data);
  }, [data, setChatList, setUserOut]);

  // 연결
  const connect = () => {
    const sockjs = new SockJS('https://catchroom.store/ws-stomp', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      reportErrors: true,
      debug: false,
    });

    const wsClient = Stomp.over(() => sockjs);

    ws.current = wsClient;
    ws.current.connect(
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      () => {
        ws.current?.subscribe(`/sub/chat/roomlist/${userId}`, (message) => {
          const recv = JSON.parse(message.body);
          setChatList(recv);
        });
      },
    );
  };

  const deleteRoom = (roomId: string) => {
    if (!ws.current) return;
    ws.current.publish({
      destination: `/pub/chat/message`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        type: 'DELETE',
        roomId: roomId,
        userId: userId,
        message: '채팅방이 삭제되었습니다.',
      }),
    });
  };

  // 연결 해제
  const disconnect = () => {
    if (!ws.current) return;
    ws.current.unsubscribe(`/sub/chat/roomlist/${userId}`);
    ws.current.disconnect();
    ws.current.deactivate();
  };

  return { connect, disconnect, deleteRoom };
};
