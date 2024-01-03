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
    <section className="w-full p-3 bg-gray-300">
      <div className="w-full flex justify-between py-3">
        <div className="flex gap-2 items-center">
          <p>예치금</p>
          <p
            className={`text-p4 font-bold ${
              account ? '' : 'underline decoration-solid'
            }`}
          >
            <Link href="/mypage/dashboard/account">
              {account ? account : '!출금 계좌를 등록하세요'}
            </Link>
          </p>
        </div>
        <p>{balance}원</p>
      </div>
      <div className="w-full h-full flex items-center border-t-2 border-gray-400 divide-x-2 divide-gray-400">
        {children}
      </div>
    </section>
  );
};

export default AccountContainer;
