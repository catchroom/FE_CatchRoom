'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ProfileButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/mypage/dashboard/profile');
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="p-3 text-p2 bg-white rounded-md border border-border-sub underline"
    >
      설정
    </button>
  );
};

export default ProfileButton;
