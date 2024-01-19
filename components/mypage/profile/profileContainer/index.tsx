'use client';
import React, { ReactNode, useState, useEffect } from 'react';
import { getUserProfile } from '@/api/mypage/api';

const ProfileContainer = ({ children }: { children: ReactNode }) => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    getUserProfile().then((res) => {
      if (res.code === 2004) {
        // console.log(res.data);
        setNickname(res.data.nickName);
      }
    });
  }, []);

  return (
    <section className="w-full flex justify-between items-center py-3">
      <div className="left">
        <strong className="text-t1 font-bold">{nickname} 님</strong>
      </div>
      <div className="right">{children}</div>
    </section>
  );
};

export default ProfileContainer;
