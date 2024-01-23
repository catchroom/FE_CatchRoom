import { ChatRoomType, MessageProps } from '@/types/chat/chatRoom/types';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'chatRoomAtom',
  storage: sessionStorage,
});

export type ChatContentType = {
  type: 'TALK' | 'ENTER';
  message: string;
  userId: number;
  roomId: string;
};

export const connectedCheckAtom = atom<boolean>({
  key: 'connectedCheckAtom',
  default: false,
});

export const chatContentAtom = atom<MessageProps[]>({
  key: 'chatContentAtom',
  default: [],
});

export const chatAllRoomAtom = atom<ChatRoomType[]>({
  key: 'wsAtom',
  default: [],
});

export const chatRoomAtom = atom<ChatRoomType>({
  key: 'chatRoomAtom',
  default: {} as ChatRoomType,

  effects_UNSTABLE: [persistAtom],
});

export const defaultValue = {} as ChatRoomType;

export const useSsrAtom = () => {
  const [isInitial, setInitial] = useState(true);
  const [value, setValue] = useRecoilState(chatRoomAtom);

  useEffect(() => {
    setInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
};
