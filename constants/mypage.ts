export const MypageConstants = {
  accountButton: [
    {
      title: '출금하기',
      location: '/mypage/withdraw',
    },
    {
      title: '내역보기',
      location: '/mypage/withdraw/history',
    },
  ],

  topBanner: {
    title: '나의 활동',
    banners: [
      {
        title: '판매 내역',
        location: '/mypage/sales',
      },
      {
        title: '구매 내역',
        location: '/mypage/purchases',
      },
      {
        title: '찜목록',
        location: '/mypage/likes',
      },
      {
        title: '작성한 후기',
        location: '/mypage/reviews',
      },
    ],
  },
  bottomBanner: {
    title: '기타',
    banners: [
      {
        title: '공지사항',
        location: '/mypage/notices',
      },
      {
        title: '서비스 약관',
        location: '/mypage/terms',
      },
      {
        title: '개인정보 처리방침',
        location: '/mypage/privacy',
      },
      {
        title: '버전 정보',
        location: '/mypage/edit',
      },
      {
        title: '1:1 문의하기',
        location: '/mypage/ask',
      },
    ],
  },
};
