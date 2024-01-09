import BankForm from '@/components/mypage/form/bankForm';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 text-action-mint-disabled gap-6">
      <BankForm />
    </div>
  );
};

export default page;
