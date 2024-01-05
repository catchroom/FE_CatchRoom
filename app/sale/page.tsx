'use client';
import Modal from '@/components/common/modal';
import CatchContainer from '@/components/sale/catch/catchContainer';
import CheckboxContainer from '@/components/sale/checkboxContainer';
import Price from '@/components/sale/price';
import SaleEndContainer from '@/components/sale/saleEndContainer';
import SaleInfoContainer from '@/components/sale/saleInfoContainer';
import SellingPriceContainer from '@/components/sale/sellingPrice/sellingPriceContainer';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Sale = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };
  const onCancle = () => {
    handleModalOpen();
  };
  const onConfirm = () => {
    handleModalOpen();
    router.push('/login');
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center mt-[73px] px-3">
      <SaleInfoContainer />
      <SaleEndContainer />
      <SellingPriceContainer />
      <Price />
      <CatchContainer />
      <CheckboxContainer />
      {/* 다음 버튼 들어갈 자리 */}
      <button onClick={handleModalOpen}>다음</button>
      {/* 모달 사용 예시 */}
      {open && (
        <Modal
          title="로그인 요청"
          content="로그인이 필요한 서비스입니다."
          showConfirmButton={true}
          showCancelButton={true}
          onCancel={onCancle}
          onConfirm={onConfirm}
          confirmString="로그인하기"
        />
      )}
    </div>
  );
};

export default Sale;
