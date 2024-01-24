import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <div className="w-full overflow-x-scroll">
        <table className="border border-border-sub w-fit">
          <tbody>
            <tr>
              <td className="p-5 border border-border-sub w-32 bg-surface-gray">
                제공받는자
              </td>
              <td className="p-5 border border-border-sub">
                %1 숙박 업소명 (변수값)
              </td>
            </tr>
            <tr>
              <td className="p-5 border border-border-sub bg-surface-gray">
                제공 목적
              </td>
              <td className="p-5 border border-border-sub">
                예약•구매한 상품•서비스의 제공 및 계약의 이행(이용자 및 이용정보
                확인), 민원처리 등 소비자 분쟁 해결
              </td>
            </tr>
            <tr>
              <td className="p-5 border border-border-sub bg-surface-gray">
                제공 항목
              </td>
              <td className="p-5 border border-border-sub">
                예약번호, 예약자 정보(예약자명, 휴대폰 번호) 또는 방문자
                정보(방문자명, 휴대폰 번호)
              </td>
            </tr>
            <tr>
              <td className="p-5 border border-border-sub bg-surface-gray">
                이용 및 보유기간
              </td>
              <td className="p-5 border border-border-sub">
                개인정보 이용목적 달성 시까지
                <br />
                단, 관계법령에 의하여 보존할 필요성이 있는 경우 그 시점까지 보존
                후 지체없이 파기
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
