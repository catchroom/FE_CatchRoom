// MESSAGE_TYPE
// 0: 일반 메시지
// 1: 제안하기/ 제안받기 메시지
// 2: 승인하기/ 승인받기 메시지
// 3: 거절하기/ 거절받기 메시지

export const CHAT_ITEMS = [
  {
    ITEM_ID: '0',
    SELLER_NICKNAME: '바나나맛우유',
    BUYER_NICKNAME: '바나나조아',
    ITEM_INFO: {
      IMAGE: '/productImage.png',
      NAME: '제주신라호텔',
      PRICE: '100000',
    },
    MESSAGE_PREVIOUS: [
      {
        MESSAGE_TYPE: 0,
        MESSAGE_ID: '1',
        CONTENT: '안녕하세요?',
        SEND_USER_NICKNAME: '바나나조아',
        DATE: '202301120523',
      },
      {
        MESSAGE_TYPE: 0,
        MESSAGE_ID: '2',
        CONTENT: '제가 학생이라 돈이 없어서.. 3만원에 가능할까요?',
        SEND_USER_NICKNAME: '바나나조아',
        DATE: '202301120524',
      },
      {
        MESSAGE_TYPE: 1,
        MESSAGE_ID: '3',
        CONTENT: '가격을 제안했어요',
        SEND_USER_NICKNAME: '바나나조아',
        DATE: '202301120524',
        OFFER_PRICE: '30,000',
      },
      {
        MESSAGE_TYPE: 2,
        MESSAGE_NICKNAME: '4',
        CONTENT: '제안이 승인됐어요',
        SEND_USER_NICKNAME: '바나나조아',
        DATE: '202301120524',
        APPROVE_PRICE: '30,000',
      },
      {
        MESSAGE_TYPE: 3,
        MESSAGE_NICKNAME: '5',
        CONTENT: '제안이 거절됐어요',
        SEND_USER_NICKNAME: '바나나조아',
        DATE: '202301120524',
        OFFER_PRICE: '30,000',
      },
    ],
  },
  {
    ITEM_ID: '1',
    SELLER_NICKNAME: '바나나조아',
    BUYER_NICKNAME: '초코조아',
    ITEM_INFO: {
      IMAGE: '/productImage.png',
      NAME: '피노키오펜션',
      PRICE: '50000',
    },
    MESSAGE_PREVIOUS: [
      {
        MESSAGE_TYPE: 0,
        MESSAGE_ID: '1',
        CONTENT: '안녕하세요?',
        SEND_USER_NICKNAME: '초코조아',
        DATE: '202301120523',
      },
      {
        MESSAGE_TYPE: 0,
        MESSAGE_ID: '2',
        CONTENT: '오천원만 깎아주신다면 평생 감사드리며 살겠습니다.',
        SEND_USER_NICKNAME: '초코조아',
        DATE: '202301120524',
      },
    ],
  },
];
