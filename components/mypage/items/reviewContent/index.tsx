'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ReviewContent = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
  };

  const handleDelete = () => {
    router.push(`/mypage/dashboard/review?id=${id}`);
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
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default ReviewContent;
