'use client';

import Modal from '@/components/common/modal';
import { useToastAlert } from '@/hooks/useToastAlert';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import React, { useState } from 'react';

const DeleteButtons = () => {
  const [openModal, setOpenModal] = useState(false);
  const { alertOpenHandler } = useToastAlert('내역을 삭제했어요.');

  const modalClose = () => {
    alertOpenHandler();
    setOpenModal(false);
  };

  const modalOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <span onClick={modalOpen} className="cursor-pointer">
        <XSymbolIcon />
      </span>
      {openModal && (
        <Modal
          title="내역 삭제"
          content="삭제도니 매물은 내역에서 확인할 수 없습니다."
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
