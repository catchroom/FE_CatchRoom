'use client';

import Modal from '@/components/common/modal';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import React, { useState } from 'react';
import { deleteSalesList } from '@/api/mypage/api';

const DeleteButtons = ({ id }: { id: number }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleDeleteSaleList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    deleteSalesList(id).then((res) => {
      if (res.code === 4030) {
        window.location.href = '/mypage/dashboard/sales';
      }
    });
  };

  return (
    <>
      <span onClick={handleModalOpen} className="cursor-pointer">
        <XSymbolIcon w={20} y={20} />
      </span>
      {openModal && (
        <Modal
          title="내역 삭제"
          content="삭제된 매물은 내역에서 확인할 수 없습니다."
          showCancelButton
          showConfirmButton
          confirmString="삭제하기"
          onCancel={handleModalClose}
          onConfirm={handleDeleteSaleList}
        />
      )}
    </>
  );
};

export default DeleteButtons;
