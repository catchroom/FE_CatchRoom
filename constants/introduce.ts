type DocsType = {
  title: string;
  content: string;
};
type IntroduceType = {
  data: DocsType[];
};

export const INTRODUCE_CATCH_ROOM: IntroduceType = {
  data: [
    {
      title: '1. 안전매물 YES!',
      content: '야놀자에서 결제된 실매물만 중개해요.',
    },
    {
      title: '2. 야놀자 연동 YES!',
      content: '구매와 동시에 구매상품(내역)을 야놀자에서 확인할 수 있어요.',
    },
    {
      title: '3. 개인정보 보호 YES!',
      content: '개인정보를 알려줄 필요없이 내 이름으로 체크인이 가능해요.',
    },
  ],
};
