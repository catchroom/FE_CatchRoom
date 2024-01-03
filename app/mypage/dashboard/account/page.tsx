import BottomSheets from '@/components/common/bottomSheets';
import BankForm from '@/components/mypage/form/bankForm/form';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 text-action-mint-disabled">
      <BankForm />
      <BottomSheets title="은행명 선택">{''}</BottomSheets>
    </div>
  );
};

export default page;
