import { maskEmail, maskPassword, maskPhoneNumber } from '@/utils/mypage-utils';

export const MYPAGE_CONSTANTS = {
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
      },
      {
        TITLE: '구매 내역',
        LOCATION: '/mypage/dashboard/purchases',
      },
      {
        TITLE: '찜목록',
        LOCATION: '/mypage/dashboard/likes',
      },
      {
        TITLE: '작성한 후기',
        LOCATION: '/mypage/dashboard/reviews',
      },
    ],
  },
  BOTTOM_BANNER: {
    TITLE: '기타',
    BANNERS: [
      {
        TITLE: '공지사항',
        LOCATION: '/mypage/dashboard/notices',
      },
      {
        TITLE: '서비스 약관',
        LOCATION: '/mypage/dashboard/terms',
      },
      {
        TITLE: '개인정보 처리방침',
        LOCATION: '/mypage/dashboard/privacy',
      },
      {
        TITLE: '버전 정보',
        LOCATION: '/mypage/dashboard/edit',
      },
      {
        TITLE: '1:1 문의하기',
        LOCATION: '/mypage/dashboard/ask',
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
  {
    title: '비밀번호',
    function: maskPassword,
    key: 'password',
  },
  {
    title: '휴대폰 번호',
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
