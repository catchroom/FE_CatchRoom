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
              <th className="border border-border-sub  p-5">
                보유 및 이용 기간
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border-sub p-5 align-top">필수</td>
              <td className="border border-border-sub p-5 align-top">
                회원가입, 서비스 이용, 부정 거래 기록 확인, 본인 여부 확인, 판매
                및 구매한 숙박권 야놀자 앱내 소유권한 변경, 민원처리 등 소비자
                분쟁해결
              </td>
              <td className="border border-border-sub p-5 align-top">
                [회원가입 시]
                <br />
                휴대전화번호, 이메일, 이름, 생년월일, 비밀번호(이메일로 가입
                시), 닉네임
                <br />
                [SNS가입 시]
                <br />
                휴대전화번호, 이메일, 이름 (카카오: 이메일)
                <br />
                [판매 · 구매 시]
                <br />
                - 숙박권 예약자 변경시 : 성명, 생년월일, 연락처(이메일/휴대폰)
                <br />
                - 여행상품 대금결제 및 정산시 : 성명, 카드사명, 신용카드번호,
                승인번호, 계좌번호, 연락처(이메일/휴대폰)
                <br />
                - 예약자와 방문자가 다를 경우 : 방문자의 이름, 휴대폰 번호
                <br />
                - 예치금 전송 및 현금환불시 : 계좌번호 및 예금주
                <br />
                [고객 상담 시]
                <br />
                - 상담내용 및 상담에 필요한 개인정보
                <br />- 앱 내 채팅 기능을 사용한 채팅 내용
              </td>
              <td className="border border-border-sub p-5 align-top">
                ∙ 회원 탈퇴 시 상담 등 민원처리, 정산 및 환불 처리를 위해 30일
                후 삭제
                <br />
                ∙ 이벤트 혜택 수령 시 부정이용방지 목적으로 (일방향
                암호화된)휴대폰번호를 혜택 제공일로부터 1년 보관 후 삭제
                <br />∙ 관계법령에 따라 보존할 필요가 있는 경우 해당 법령에서
                요구하는 기한까지 보관 (예: 구매 회원의 경우 5년간, IP의 경우
                3개월)
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          ※ 위의 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다.
          그러나 동의를 거부할 경우 서비스 이용이 제한됩니다.
        </p>
      </div>
    </div>
  );
};

export default page;
