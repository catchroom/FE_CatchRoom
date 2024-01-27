import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] bg-surface overflow-x-scroll">
      <div className="w-[960px] border border-gray-300 overflow-x-scroll flex flex-col divide-y divide-gray-300">
        <ul className="grid grid-cols-12 font-medium bg-surface-gray divide-x divide-gray-300">
          <li className="col-span-1  p-5">구분</li>
          <li className="col-span-4  p-5">수집 목적</li>
          <li className="col-span-4  p-5">수집 항목</li>
          <li className="col-span-3  p-5">보유 및 이용 기간</li>
        </ul>
        <ul className="grid grid-cols-12 divide-x divide-gray-300">
          <li className="col-span-1  p-5">선택</li>
          <li className="col-span-4  p-5">
            개인맞춤형 상품∙서비스 혜택에 관한 정보제공, 통계∙분석∙이용내역
            정보와의 결합 및 분석, 회사 또는 기타 광고주의 요청에 따른
            정보∙안내(프로모션∙이벤트)전송
          </li>
          <li className="col-span-4  p-5">
            예약내역(예약일시, 결제금액, 업체명), 디바이스 ID, 휴대폰 번호,
            서비스이용기록, IP주소, 접속로그, Cookie, 광고식별자, 단말기 OS와
            버전, 단말기 모델명, 브라우저 버전, 예약자 및 구매자 정보(이름,
            휴대폰 번호, 생년월일, 이메일 주소), 방문자 정보(이름, 휴대폰 번호,
            생년월일), 상담내용 및 상담에 필요한 개인정보
          </li>
          <li className="col-span-3  p-5">
            - 동의 철회시, 이용종료일 도래 시까지
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
