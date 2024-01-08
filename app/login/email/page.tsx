import Header from '@/components/common/header';
import React from 'react';
import LoginForm from '@/components/login';

const Page = () => {
  return (
    <>
      <Header title="이메일로 로그인" showBackButton />
      <div className="flex flex-col container mx-auto px-3 py-6 bg-primary">
        <LoginForm />
      </div>
    </>
  );
};

export default Page;
