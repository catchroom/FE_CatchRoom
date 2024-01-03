import ProfileForm from '@/components/mypage/form/profileForm/form';
import PrivacyContainer from '@/components/mypage/privacy/container';
import React from 'react';
import { MYPAGE_PRIVACY } from '@/constants/mypage';
import PrivacyItems from '@/components/mypage/privacy/items';

const sampleData: Record<string, string> = {
  id: 'doremi123@gmail.com',
  email: 'doremi123@gmail.com',
  password: '123456789!',
  phoneNumber: '01012345678',
};

const page = () => {
  console.log(sampleData['email']);

  return (
    <div className="w-full h-full px-5">
      <div className="w-full py-6 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-10">
          <ProfileForm name="홍길동" />
          <PrivacyContainer>
            {MYPAGE_PRIVACY.map((item) => {
              return (
                <PrivacyItems
                  key={item.key}
                  item={item}
                  personalData={sampleData}
                />
              );
            })}
          </PrivacyContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
