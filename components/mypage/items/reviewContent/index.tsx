'use client';

import Modal from '@/components/common/modal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ReviewContent = ({ id, fn }: { id: string; fn?: () => void }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    fn && fn();
    closeModal();
  };

  return (
    <div className="w-full flex flex-col mt-6 gap-6">
      <p>저렴하게 잘 이용했어요!</p>
      <div className="w-full flex justify-end">
        <button className="p-1 h-9 w-[60px]" onClick={handleEdit}>
          수정
        </button>
        <button
          className="p-1 h-9 w-[60px] text-text-critical"
          onClick={openModal}
        >
          삭제
        </button>
        {modalOpen && (
          <Modal
            title="내 리뷰 삭제"
            showCancelButton
            showConfirmButton
            confirmString="삭제하기"
            onCancel={closeModal}
            onConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewContent;
