import Image from 'next/image';
import Logo from '../../public/Logo.png';
import React from 'react';
import LoginForm from '@/components/login';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-3 pt-20 bg-bg">
      <Image className="justify-center" alt="Logo" src={Logo} />
      <div className="flex flex-col container mx-auto py-6 bg-primary pt-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
