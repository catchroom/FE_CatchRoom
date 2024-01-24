import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <h2 className="text-h2">캐치룸 개인정보처리방침</h2>
      <div className="w-full overflow-x-scroll">
        <table className="border border-border-sub w-[960px]">
          <thead className=" bg-surface-gray">
            <tr>
              <th className="border border-border-sub  p-5 w-20">구분</th>
              <th className="border border-border-sub  p-5">수집 목적</th>
              <th className="border border-border-sub  p-5">수집 항목</th>
              <th className="border border-border-sub  p-5 w-48">
                보유 및 이용 기간
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border-sub p-5 align-top">선택</td>
              <td className="border border-border-sub p-5 align-top">
                개인맞춤형 상품∙서비스 혜택에 관한 정보제공, 통계∙분석∙이용내역
                정보와의 결합 및 분석, 회사 또는 기타 광고주의 요청에 따른
                정보∙안내(프로모션∙이벤트)전송
              </td>
              <td className="border border-border-sub p-5 align-top">
                예약내역(예약일시, 결제금액, 업체명), 디바이스 ID, 휴대폰 번호,
                서비스이용기록, IP주소, 접속로그, Cookie, 광고식별자, 단말기
                OS와 버전, 단말기 모델명, 브라우저 버전, 예약자 및 구매자
                정보(이름, 휴대폰 번호, 생년월일, 이메일 주소), 방문자
                정보(이름, 휴대폰 번호, 생년월일), 상담내용 및 상담에 필요한
                개인정보
              </td>
              <td className="border border-border-sub p-5 align-top">
                - 동의 철회시, 이용종료일 도래 시까지
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
