'use client';
import React, { ReactNode } from 'react';
import { useQueryGetProfile } from '@/api/mypage/query';

const ProfileContainer = ({ children }: { children: ReactNode }) => {
  const { data } = useQueryGetProfile();

  return (
    <section className="w-full flex justify-between items-center py-3">
      <div className="left">
        <strong className="text-t1 font-bold">{data?.nickName} 님</strong>
      </div>
      <div className="right">{children}</div>
    </section>
  );
};

export default ProfileContainer;
