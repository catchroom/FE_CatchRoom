'use client';
import Header from '@/components/common/header';
import Modal from '@/components/common/modal';
import CatchContainer from '@/components/sale/catch/catchContainer';
import CheckboxContainer from '@/components/sale/checkboxContainer';
import Line from '@/components/sale/line';
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
    <div>
      <Header title="숙박권 판매" showBackButton={true} />
      <div className="p-5">
        <SaleInfoContainer />
        <Line />
        <SaleEndContainer />
        <Line />
        <SellingPriceContainer />
        <Line />
        <CatchContainer />
        <Line />
        <CheckboxContainer />
      </div>

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
