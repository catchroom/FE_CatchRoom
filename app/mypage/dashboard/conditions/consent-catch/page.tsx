import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제1조 (목적)</h3>
        <div>
          본 동의서는 캐치룸 (이하 &quot;회사&quot;)가 제공하는 캐치특가
          서비스에 관한 이용자(이하 &quot;고객&quot;)의 권리와 의무, 서비스 이용
          조건 등을 규정함을 목적으로 합니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제2조 (캐치특가 자동 설정)</h3>
        <div>
          1. 고객은 회사의 캐치특가 서비스를 이용함에 있어서 캐치특가 설정을
          시스템이 자동으로 수행하는 것을 허용합니다.
          <br />
          <br />
          2. 캐치특가로 설정된 매물은 회사의 메인홈 상단 캐치특가 배너에
          자동으로 업로드되어 홍보 됩니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제3조 (캐치특가 노출 및 가격 설정)</h3>
        <div>
          1. 고객은 메인홈 상단 캐치특가 배너에 캐치특가 매물을 업로드하는 것을
          허용합니다. <br />
          <br />
          2. 고객은 메인홈에 노출하지 않고 가격만 캐치특가로 설정하고자 하는
          경우, 자사에 문의하여 일반 매물로 노출되도록 조치하겠다는 것에
          동의합니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제4조 (기타 규정)</h3>
        <div>
          1. 회사는 캐치특가 서비스와 관련된 사항에 대한 변경이 있을 경우, 이를
          사전에 고객에게 공지합니다. <br />
          <br />
          2. 고객은 회사의 캐치특가 서비스 이용 시 관련 법령 및 회사의 정책,
          규정을 준수해야 합니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제5조 (유효기간)</h3>
        <div>
          본 동의서의 유효기간은 서비스 이용 동의일로부터 계속적으로 유지됩니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제6조 (본 동의서의 변경)</h3>
        <div>
          회사는 필요한 경우, 고객에게 사전 고지 후 본 동의서를 변경할 수
          있습니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">제7조 (면책조항)</h3>
        <div>
          1. 회사는 정당한 사유가 발생한 경우, 캐치특가 서비스 제공에 대한
          책임을 면제할 수 있습니다. <br />
          <br />
          2. 본 동의서는 고객이 서비스 이용 시 사전에 숙지하고 동의한 내용으로
          간주되며, 동의일로부터 유효하게 적용됩니다.
        </div>
      </div>
    </div>
  );
};

export default page;
