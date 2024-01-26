'use client';

import Modal from '@/components/common/modal';
import { useToastAlert } from '@/hooks/useToastAlert';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import React, { useState } from 'react';
import { deleteSalesList } from '@/api/mypage/api';

const DeleteButtons = ({ id }: { id: number }) => {
  const [openModal, setOpenModal] = useState(false);
  const { alertOpenHandler } = useToastAlert('내역을 삭제했어요.');

  const modalClose = () => {
    setOpenModal(false);
  };

  const modalOpen = (id: number) => {
    setOpenModal(true);
    deleteSalesList(id).then((res) => {
      if (res.code === 4030) {
        alertOpenHandler();
        window.location.href = '/mypage/dashboard/sales';
      }
    });
  };

  return (
    <>
      <span onClick={() => modalOpen(id)} className="cursor-pointer">
        <XSymbolIcon />
      </span>
      {openModal && (
        <Modal
          title="내역 삭제"
          content="삭제된 매물은 내역에서 확인할 수 없습니다."
          showCancelButton
          showConfirmButton
          confirmString="삭제하기"
          onCancel={modalClose}
          onConfirm={modalClose}
        />
      )}
    </>
  );
};

export default DeleteButtons;
