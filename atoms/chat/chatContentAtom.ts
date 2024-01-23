import {
  ChatMessageDto,
  ChatRoomType,
  MessageProps,
} from '@/types/chat/chatRoom/types';
import { atom } from 'recoil';

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
  default: {
    chatRoomNumber: '',
    buyerId: -1,
    sellerId: -1,
    productId: -1,
    loginUserIdentity: '',
    accommodationUrl: '',
    partnerNickName: '',
    lastChatmessageDto: {} as ChatMessageDto,
    dealState: '',
  },
});
