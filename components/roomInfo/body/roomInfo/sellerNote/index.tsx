import React from 'react';

const SellerNoteComponent = () => {
  // 받아와야 할 데이터
  // (판매자 한마디)
  return (
    <div className="flex flex-col w-full items-start justify-center my-6">
      <p className="text-p2 font-semibold">판매자 한마디</p>
      <div className="w-full mt-2 text-p1 font-medium">
        밖이 너무 추워서 나가기가 싫어졌어요..
      </div>
    </div>
  );
};

export default SellerNoteComponent;
