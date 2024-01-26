import {
  ChatInitialInfo,
  ChatRoomType,
  MessageProps,
} from '@/types/chat/chatRoom/types';
import { atom, selector } from 'recoil';

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

// chatContentAtom 뒤에 새로운 메시지를 추가하는 selector
export const chatContentSelector = selector<MessageProps[]>({
  key: 'chatContentSelector',
  get: ({ get }) => {
    const chatContent = get(chatContentAtom);

    return chatContent.reverse();
  },
});

export const chatAllRoomAtom = atom<ChatRoomType[]>({
  key: 'wsAtom',
  default: [],
});

export const chatRoomInfo = atom<ChatInitialInfo>({
  key: 'chatRoomInfo',
  default: {} as ChatInitialInfo,
});

export const defaultValue = {} as ChatRoomType;

export const negoPriceAtom = atom<number>({
  key: 'negoPriceAtom',
  default: 0,
});

export const negoPriceSelector = selector<{
  sellPrice: number;
  commissionPrice: number;
  totalPrice: number;
}>({
  key: 'negoPriceSelector',
  get: ({ get }) => {
    const sellPrice = get(negoPriceAtom);
    const commissionPrice = sellPrice * 0.5;
    const totalPrice = sellPrice + commissionPrice;

    const returnPrice = {
      sellPrice,
      commissionPrice,
      totalPrice,
    };

    return returnPrice;
  },
});
