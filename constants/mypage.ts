import { Root } from '@/types/mypage/types';
import { maskEmail } from '@/utils/mypage-utils';

export const MYPAGE_CONSTANTS: Root = {
  ACCOUNT_BUTTON: [
    {
      TITLE: '출금하기',
      LOCATION: '/mypage/dashboard/withdraw',
    },
    {
      TITLE: '내역보기',
      LOCATION: '/mypage/dashboard/withdraw/history',
    },
  ],

  TOP_BANNER: {
    TITLE: '나의 활동',
    BANNERS: [
      {
        TITLE: '판매 내역',
        LOCATION: '/mypage/dashboard/sales',
        TYPE: 'history',
      },
      {
        TITLE: '구매 내역',
        LOCATION: '/mypage/dashboard/purchase',
        TYPE: 'shopping',
      },
      {
        TITLE: '찜목록',
        LOCATION: '/mypage/dashboard/likes',
        TYPE: 'heart',
      },
    ],
  },
  BOTTOM_BANNER: {
    TITLE: '기타',
    BANNERS: [
      {
        TITLE: '서비스 약관',
        LOCATION: '/mypage/dashboard/terms',
      },
      {
        TITLE: '개인정보 처리방침',
        LOCATION: '/mypage/dashboard/privacy',
      },
    ],
  },
};

export const MYPAGE_PRIVACY = [
  {
    title: '아이디',
    function: maskEmail,
    key: 'id',
  },
  {
    title: '이메일',
    function: maskEmail,
    key: 'email',
  },
];

export const INPUT_LIST = [
  {
    name: 'account',
    placeholder: '계좌번호 입력',
  },
  {
    name: 'name',
    placeholder: '예금주명',
  },
];

export const BANK_LIST = [
  { name: '카카오뱅크', value: 'kakaobank' },
  { name: '농협', value: 'nonghyup' },
  { name: '국민은행', value: 'kb' },
  { name: '신한은행', value: 'shinhan' },
  { name: '우리은행', value: 'woori' },
  { name: 'IBK기업은행', value: 'ibk' },
  { name: '하나은행', value: 'hana' },
  { name: '대구은행', value: 'daegu' },
  { name: '경남은행', value: 'gyeongnam' },
  { name: '광주은행', value: 'gwangju' },
  { name: '도이치은행', value: 'deutsche' },
  { name: '부산은행', value: 'busan' },
  { name: '산림조합', value: 'sanrim' },
  { name: '산업은행', value: 'sangup' },
  { name: '신협', value: 'sinhyup' },
  { name: '새마을금고', value: 'saemaeul' },
  { name: '수협', value: 'suhyup' },
  { name: 'Citi은행', value: 'citi' },
  { name: '우체국', value: 'post' },
  { name: '저축은행', value: 'jechuk' },
  { name: '전북은행', value: 'jeonbuk' },
  { name: '제주은행', value: 'jeju' },
  { name: '중국공상은행', value: 'china' },
  { name: '케이뱅크', value: 'kbank' },
  { name: '토스뱅크', value: 'toss' },
  { name: 'BNP파리바', value: 'bnp' },
  { name: 'Bank of America', value: 'boa' },
  { name: 'HSBC', value: 'hsbc' },
  { name: 'JP모간', value: 'jpmorgan' },
  { name: 'SC제일은행', value: 'sc' },
];

export const MENU_BUTTON = [
  {
    name: '게시중',
    value: 'onSale',
  },
  {
    name: '게시만료',
    value: 'offSale',
  },
];
