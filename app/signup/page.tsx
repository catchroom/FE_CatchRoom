import Header from '@/components/common/header';
import React from 'react';
import SignUpAuth from '@/components/signup';

const Page = () => {
  return (
    <div>
      <Header title="야놀자 통합 회원가입(1/2)" showBackButton />
      <div className="flex z-5 flex-col min-h-screen justify-between container mx-auto px-5 py-6 mt-16 bg-primary">
        <SignUpAuth />
      </div>
    </div>
  );
};

export default Page;
