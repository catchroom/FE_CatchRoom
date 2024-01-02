import ValidationForm from '@/components/mypage/validationForm';
import React from 'react';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-56 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col">
          <ValidationForm name="홍길동" />
        </div>
      </div>
    </div>
  );
};

export default page;
