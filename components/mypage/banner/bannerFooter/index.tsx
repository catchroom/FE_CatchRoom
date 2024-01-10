import React from 'react';

const BannerFooter = () => {
  return (
    <div className="w-full flex flex-col items-start gap-1 bg-border px-3 py-4 text-p3 text-text-sub">
      <h1 className=" text-t3 font-bold">(주) 캐치룸</h1>
      <p>고객센터 02-4989-4989</p>
      <p>평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
    </div>
  );
};

export default BannerFooter;
