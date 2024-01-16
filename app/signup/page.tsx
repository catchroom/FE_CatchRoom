import Header from '@/components/common/header';
import React from 'react';
import SignUpAuth from '@/components/signup';

const Page = () => {
  return (
    <>
      <Header title="야놀자 통합 회원가입(1/2)" showBackButton />
      <div className="flex flex-col min-h-screen justify-between container mx-auto px-3 py-6 bg-primary">
        <SignUpAuth />
      </div>
    </>
  );
};

export default Page;
