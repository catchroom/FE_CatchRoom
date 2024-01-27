import BottomNav from '@/components/common/bottomNav';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-t2 font-semibold text-text-sub">
      <p>
        채팅 기능은{' '}
        <Link href="/login" replace>
          <span className=" underline cursor-pointer">로그인</span>
        </Link>{' '}
        후 이용할 수 있어요.
      </p>
      <BottomNav />
    </div>
  );
};

export default page;
