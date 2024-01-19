import { Root } from '@/types/mypage/types';
import { maskEmail, maskPhoneNumber, noMask } from '@/utils/mypage-utils';

export const MYPAGE_CONSTANTS: Root = {
  ACCOUNT_BUTTON: [
    {
      TITLE: '예치금 출금',
      LOCATION: '/mypage/dashboard/withdraw',
    },
    {
      TITLE: '예치금 내역',
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
        LOCATION: '/mypage/dashboard/wishlist',
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

export const MYPAGE_APP_ROUTE = [
  ...MYPAGE_CONSTANTS.ACCOUNT_BUTTON,
  ...MYPAGE_CONSTANTS.TOP_BANNER.BANNERS,
  ...MYPAGE_CONSTANTS.BOTTOM_BANNER.BANNERS,
  {
    TITLE: '설정',
    LOCATION: '/mypage/dashboard/profile',
  },
  {
    TITLE: '내 계좌',
    LOCATION: '/mypage/dashboard/account',
  },
];

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
  {
    title: '이름',
    function: noMask,
    key: 'name',
  },
  {
    title: '휴대폰번호',
    function: maskPhoneNumber,
    key: 'phoneNumber',
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
  { name: '카카오뱅크', value: '카카오뱅크' },
  { name: '농협', value: '농협' },
  { name: '국민은행', value: '국민은행' },
  { name: '신한은행', value: '신한은행' },
  { name: '우리은행', value: '우리은행' },
  { name: 'IBK기업은행', value: 'IBK기업은행' },
  { name: '하나은행', value: '하나은행' },
  { name: '대구은행', value: '대구은행' },
  { name: '경남은행', value: '경남은행' },
  { name: '광주은행', value: 'gwangju' },
  { name: '도이치은행', value: 'deutsche' },
  { name: '부산은행', value: '부산은행' },
  { name: '산림조합', value: '산림조합' },
  { name: '산업은행', value: '산업은행' },
  { name: '신협', value: '신협' },
  { name: '새마을금고', value: '새마을금고' },
  { name: '수협', value: '수협' },
  { name: 'Citi은행', value: 'Citi은행' },
  { name: '우체국', value: 'post' },
  { name: '저축은행', value: '저축은행' },
  { name: '전북은행', value: '전북은행' },
  { name: '제주은행', value: '제주은행' },
  { name: '중국공상은행', value: '중국공상은행' },
  { name: '케이뱅크', value: '케이뱅크' },
  { name: '토스뱅크', value: '토스뱅크' },
  { name: 'BNP파리바', value: 'BNP파리바' },
  { name: 'Bank of America', value: 'Bank of America' },
  { name: 'HSBC', value: 'HSBC' },
  { name: 'JP모간', value: 'JP모간' },
  { name: 'SC제일은행', value: 'SC제일은행' },
];

export const INVESTMENT_BANK_LIST = [
  { name: '미래에셋', value: '미래에셋' },
  { name: '한국투자', value: '한국투자' },
  { name: 'KB증권', value: 'KB증권' },
  { name: '삼성증권', value: '삼성증권' },
  { name: '키움', value: '키움' },
  { name: 'NH투자', value: 'NH투자' },
  { name: '신한금융투자', value: '신한금융투자' },
  { name: '하나증권', value: '하나증권' },
  { name: '대신', value: '대신' },
  { name: 'SK증권', value: 'SK증권' },
  { name: '유진투자', value: '유진투자' },
  { name: 'DB금융투자', value: 'DB금융투자' },
  { name: '한화투자', value: '한화투자' },
  { name: '현대차증권', value: '현대차증권' },
  { name: '하이투자', value: '하이투자' },
  { name: '이베스트', value: '이베스트' },
  { name: '다올투자증권', value: '다올투자증권' },
  { name: '교보', value: '교보' },
  { name: '메리츠증권', value: '메리츠증권' },
  { name: '토스증권', value: '토스증권' },
  { name: '유안타증권', value: '유안타증권' },
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
