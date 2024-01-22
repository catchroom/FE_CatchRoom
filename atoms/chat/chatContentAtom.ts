import { ChatMessageDto, ChatRoomType } from '@/types/chat/chatRoom/types';
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

export const chatContentAtom = atom<ChatContentType[]>({
  key: 'chatContentAtom',
  default: [
    {
      type: 'TALK',
      message: '안녕하세요',
      userId: 4,
      roomId: '4983cb81-2bbc-4ce6-9e93-322c98c8fe4d',
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
  },
});
