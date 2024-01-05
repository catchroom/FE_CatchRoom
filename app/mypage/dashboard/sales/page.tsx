import Divider from '@/components/mypage/divider';
import Menu from '@/components/mypage/menu';
import React from 'react';

const page = () => {
  return (
    <div className="w-full h-full px-5 pt-3 border-t-2 border-border-secondary">
      <Menu />
      <Divider />
    </div>
  );
};

export default page;
