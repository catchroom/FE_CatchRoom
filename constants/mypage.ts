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

export const INVESTMENT_BANK_LIST = [
  { name: '미래에셋', value: 'miraeasset' },
  { name: '한국투자', value: 'koreainvestment' },
  { name: 'KB증권', value: 'kbsecurities' },
  { name: '삼성증권', value: 'samsungsecurities' },
  { name: '키움', value: 'kiwoom' },
  { name: 'NH투자', value: 'nhinvestment' },
  { name: '신한금융투자', value: 'shinhaninvestment' },
  { name: '하나증권', value: 'hanasecurities' },
  { name: '대신', value: 'daeshin' },
  { name: 'SK증권', value: 'sksecurities' },
  { name: '유진투자', value: 'yujininvestment' },
  { name: 'DB금융투자', value: 'dbfinancialinvestment' },
  { name: '한화투자', value: 'hanwainvestment' },
  { name: '현대차증권', value: 'hyundaicarsecurities' },
  { name: '하이투자', value: 'hifinanceinvestment' },
  { name: '이베스트', value: 'ebest' },
  { name: '다올투자증권', value: 'daolinvestmentsecurities' },
  { name: '교보', value: 'kyobo' },
  { name: '메리츠증권', value: 'meritzsecurities' },
  { name: '토스증권', value: 'tossecurities' },
  { name: '유안타증권', value: 'yuantasecurities' },
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
