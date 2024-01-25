import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">이용규칙</h3>
        <div>
          1. 19세 미만 청소년의 혼숙은 법적으로 불가하며, 이에 대한 숙소의 입실
          거부 시 취소/환불이 불가합니다.
          <br />
          <br />
          2. 19세 미만 청소년 예약에 대한 숙소의 입실 거부 시 취소/환불이
          불가하오니, 예약 전 반드시 숙소에 확인하시기 바랍니다. <br />
          <br />
          3. 업체 현장에서 객실 컨디션 및 서비스로 인해 발생된 분쟁은 캐치룸에서
          책임지지 않습니다.
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">취소/환불규정</h3>
        <div>
          1. 캐치룸에서 구매한 숙소 상품은 환불이 불가합니다. <br />
          <br />
          2. 단, 숙소 사정에 의해 취소 발생 시 고객센터를 통해 100% 환불이
          가능합니다.
        </div>
      </div>
    </div>
  );
};

export default page;
