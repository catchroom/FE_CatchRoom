import { ChatContentType } from '@/app/stomp/sock/page';
import { CompatClient } from '@stomp/stompjs';
import { atom } from 'recoil';

export const chatContentAtom = atom<ChatContentType[]>({
  key: 'chatContentAtom',
  default: [],
});

export const wsAtom = atom<CompatClient | null>({
  key: 'wsAtom',
  default: null,
});
