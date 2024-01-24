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
  console.log(type, id, productId);

  const { data } = useQueryGetReview(type, id);
  console.log(data);

  const handleEdit = () => {
    //쿼리스트링으로 수정이라는 파라미터 보내서, 이게 있으면 get해오고 put되게 추가
    router.push(`/mypage/dashboard/review?id=${productId}&type=${type}`);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleDelete = () => {
    fn && fn();
    deleteReviews(type, id).then((res) => console.log(res.data));
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
