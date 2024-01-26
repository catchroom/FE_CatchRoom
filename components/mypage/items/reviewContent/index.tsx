'use client';

import Modal from '@/components/common/modal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useQueryGetReview } from '@/api/mypage/query';
import { deleteReviews } from '@/api/mypage/api';

const ReviewContent = ({
  id, //리뷰 아이디
  fn,
  type,
  productId, //판매내역 id
}: {
  id: number;
  productId: number;
  fn?: () => void;
  type: '구매' | '판매';
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const { data } = useQueryGetReview(type, id);

  const handleEdit = () => {
    router.push(
      `/mypage/dashboard/review?id=${productId}&type=${type}&reviewId=${id}`,
    );
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    fn && fn();
    deleteReviews(type, id).then((res) => {
      if (res.code === 2025) {
        window.location.href = '/mypage/dashboard/sales';
      }
    });
    closeModal();
  };

  return (
    <div className="w-full flex flex-col mt-6 gap-6">
      <p>{data?.content}</p>
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
