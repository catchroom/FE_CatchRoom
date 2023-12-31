import MoneySVG from '@/public/svgComponent/money';
import WarningSVG from '@/public/svgComponent/warning';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const AccountContainer = ({
  children,
  account,
  balance,
}: {
  children: ReactNode;
  account?: string;
  balance?: number;
}) => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 pt-4 bg-white ">
      <div className="w-full flex justify-between text-h5 font-semibold">
        <div className="flex gap-2 items-center ">
          <MoneySVG />
          <p>예치금</p>
        </div>
        <p>{balance ? balance.toLocaleString('us-EN') : '0'}원</p>
      </div>
      {/* 계좌 번호가 있거나 없을때 판단 */}
      <div
        className={`flex justify-between items-center p-3 ${
          !account ? 'bg-surface-critical' : 'bg-surface-gray'
        }`}
      >
        {!account ? (
          <>
            <div className="flex items-center gap-2 text-p2">
              <WarningSVG />
              <p>내 계좌를 등록해주세요</p>
            </div>
            <Link href="/mypage/dashboard/account">
              <button className="underline font-medium text-text-critical">
                등록
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 text-p2">
              <p className=" text-text-sub">내 계좌</p>
              <p>{account}</p>
            </div>
            <Link href="/mypage/dashboard/account">
              <button className="underline font-medium text-text">수정</button>
            </Link>
          </>
        )}
      </div>
      {/* 하단 버튼 컨테이너 */}
      <div className="w-full h-full flex py-3 items-center border-t border-divider divide-x divide-divider">
        {children}
      </div>
    </section>
  );
};

export default AccountContainer;
