'use client';

import MoneySVG from '@/public/svgComponent/money';
import WarningSVG from '@/public/svgComponent/warning';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useQueryGetAccount } from '@/api/mypage/query';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import { deleteAccount } from './../../../../api/mypage/api';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isWithDrawAtom } from '@/atoms/mypage/menuAtom';

const AccountContainer = ({ children }: { children: ReactNode }) => {
  const { data } = useQueryGetAccount();
  const setWithdrawValue = useSetRecoilState(isWithDrawAtom);

  useEffect(() => {
    if (data?.accountNumber) {
      setWithdrawValue(true);
    } else {
      setWithdrawValue(false);
    }
  }, [data, setWithdrawValue]);

  return (
    <section className="w-full flex flex-col gap-4 px-4 pt-4 mb-4 bg-white ">
      <div className="w-full flex justify-between text-h5 font-semibold">
        <div className="flex gap-2 items-center ">
          <MoneySVG />
          <p>예치금</p>
        </div>
        <p>{data?.balance ? data.balance.toLocaleString('us-EN') : '0'}원</p>
      </div>
      {/* 계좌 번호가 있거나 없을때 판단 */}
      <div
        className={`flex justify-between items-center p-3 ${
          !data?.accountNumber ? 'bg-surface-critical' : 'bg-surface-gray'
        }`}
      >
        {!data?.accountNumber ? (
          <>
            <div className="flex items-center gap-2 text-p2">
              <WarningSVG />
              <p>내 계좌를 등록해주세요</p>
            </div>
            <Link href="/mypage/dashboard/account">
              <button className="underline text-p2 font-medium text-text-critical">
                등록
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 text-p2">
              <p className=" text-text-sub">내 계좌</p>

              <p>
                {data?.accountNumber} ({data?.bankName})
              </p>
            </div>

            {/* 눌리면 바텀시트 열리게 */}
            <BottomSheetsWithoutCloseBtn
              buttonSelect="more"
              outerControlAtom="more"
              outerControl={false}
            >
              <div className="flex flex-col gap-7 w-full py-3 text-t1 font-bold">
                {/* 누르면 계좌 선택 페이지로 이동? */}
                <Link href="/mypage/dashboard/account">수정하기</Link>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    deleteAccount().then(() => {
                      window.location.href = '/mypage';
                    });
                  }}
                >
                  삭제하기
                </div>
              </div>
            </BottomSheetsWithoutCloseBtn>
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
