import Header from '@/components/common/header';
import React from 'react';
import SignUpInfo from '@/components/signup/next';

const Page = () => {
  return (
    <>
      <Header title="야놀자 통합 회원가입(2/2)" showBackButton />
      <div className="flex z-5 flex-col min-h-screen justify-between container mx-auto px-3 py-6 mt-16 bg-primary">
        <SignUpInfo />
      </div>
    </>
  );
};

export default Page;
