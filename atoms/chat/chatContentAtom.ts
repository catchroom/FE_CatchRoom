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
  default: [
    {
      type: 'TALK',
      message: '안녕하세요',
      userId: 5,
      roomId: '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d',
      time: '2024-01-18T05:52:01.467169215',
    },
    {
      type: 'NEGO_REQ',
      message: '가격을 제안했어요',
      userId: 5,
      roomId: '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d',
      time: '2024-01-18T05:52:01.467169215',
      negoPrice: 30000,
    },
    {
      type: 'NEGO_ALLOW',
      message: '가격을 승인했어요',
      userId: 5,
      roomId: '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d',
      time: '2024-01-18T05:52:01.467169215',
      negoPrice: 30000,
    },
    {
      type: 'NEGO_DENIED',
      message: '가격을 거절했어요',
      userId: 5,
      roomId: '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d',
      time: '2024-01-18T05:52:01.467169215',
      negoPrice: 30000,
    },
  ],
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
