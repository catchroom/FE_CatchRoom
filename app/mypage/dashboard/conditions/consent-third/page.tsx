import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <div className="w-full overflow-x-scroll">
        <div className="border border-border-sub w-fit flex flex-col divide-y divide-gray-300">
          <ul className="grid grid-cols-3 divide-x divide-gray-300">
            <li className="p-5 col-span-1 bg-surface-gray">제공받는자</li>
            <li className="p-5 col-span-2">%1 숙박 업소명 (변수값)</li>
          </ul>
          <ul className="grid grid-cols-3 divide-x divide-gray-300">
            <li className="p-5 col-span-1 bg-surface-gray">제공 목적</li>
            <li className="p-5 col-span-2">
              예약•구매한 상품•서비스의 제공 및 계약의 이행(이용자 및 이용정보
              확인), 민원처리 등 소비자 분쟁 해결
            </li>
          </ul>
          <ul className="grid grid-cols-3 divide-x divide-gray-300">
            <li className="p-5 col-span-1 bg-surface-gray">제공 항목</li>
            <li className="p-5 col-span-2">
              예약번호, 예약자 정보(예약자명, 휴대폰 번호) 또는 방문자
              정보(방문자명, 휴대폰 번호)
            </li>
          </ul>
          <ul className="grid grid-cols-3 divide-x divide-gray-300">
            <li className="p-5 col-span-1 bg-surface-gray">이용 및 보유기간</li>
            <li className="p-5 col-span-2">
              개인정보 이용목적 달성 시까지
              <br />
              단, 관계법령에 의하여 보존할 필요성이 있는 경우 그 시점까지 보존
              후 지체없이 파기
            </li>
          </ul>
        </div>
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
