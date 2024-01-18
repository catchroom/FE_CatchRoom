'use client';

import React, { useState } from 'react';
import { logout } from '@/api/mypage/api';
import nookies from 'nookies';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/modal';

const Logout = () => {
  const router = useRouter();

  const [openAlert, setOpenAlert] = useState(false);
  const handleModalOpen = () => {
    setOpenAlert((prev) => !prev);

    logout()
      .then((response) => {
        console.log(response);
        if (response.code === 2000) {
          nookies.destroy(null, 'accessToken');
          nookies.destroy(null, 'refreshToken');
          router.push('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex">
      <p
        className="px-2 py-3 underline text-text-sub font-medium text-p2 cursor-pointer"
        onClick={() => {
          setOpenAlert(true);
        }}
      >
        {/* 문구 수정 요청 */}
        로그아웃
      </p>
      {openAlert && (
        <Modal
          title="로그아웃 하시겠어요?"
          showConfirmButton={true}
          showCancelButton={true}
          onConfirm={handleModalOpen}
          confirmString="예"
        />
      )}
    </div>
  );
};

export default Logout;
