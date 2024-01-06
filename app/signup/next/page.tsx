import Header from '@/components/common/header';
import React from 'react';
import SignUpInfo from '@/components/signup/next';

const Page = () => {
  return (
    <>
      <Header title="이메일로 회원가입(2/2)" showBackButton />
      <div className="flex flex-col container mx-auto px-3 py-6 bg-primary">
        <SignUpInfo />
      </div>
    </>
  );
};

export default Page;
