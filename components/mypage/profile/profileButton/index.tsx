'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ProfileButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/mypage/myprofile');
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="p-3 bg-ui text-gray-500 rounded-lg"
    >
      프로필 수정
    </button>
  );
};

export default ProfileButton;
