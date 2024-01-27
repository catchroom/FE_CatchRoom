'use client';

import React, { useState } from 'react';
import { logout } from '@/api/mypage/api';
import nookies from 'nookies';
import Modal from '@/components/common/modal';

const Logout = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const handleModalOpen = () => {
    logout()
      .then((response) => {
        console.log(response);
        if (response.code === 2000) {
          nookies.destroy(null, 'accessToken');
          nookies.destroy(null, 'refreshToken');
          nookies.destroy(null, 'userId');
          window.location.href = '/home';
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
        로그아웃
      </p>
      {openAlert && (
        <Modal
          title="로그아웃 하시겠어요?"
          showConfirmButton={true}
          showCancelButton={true}
          onConfirm={handleModalOpen}
          onCancel={() => {
            setOpenAlert(false);
          }}
          confirmString="예"
          cancelString="아니요"
        />
      )}
    </div>
  );
};

export default Logout;
