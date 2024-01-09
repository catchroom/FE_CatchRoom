import ProfileForm from '@/components/mypage/form/profileForm';
import PrivacyContainer from '@/components/mypage/privacy/container';
import React from 'react';
import { MYPAGE_PRIVACY } from '@/constants/mypage';
import PrivacyItems from '@/components/mypage/privacy/items';
import PrivacyToggle from '@/components/mypage/privacy/privacyToggle';

const sampleData: Record<string, string> = {
  id: 'doremi123@gmail.com',
  email: 'doremi123@gmail.com',
  password: '123456789!',
  phoneNumber: '01012345678',
};

const page = () => {
  console.log(sampleData['email']);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="w-full flex flex-col items-center justify-center px-5 pt-5">
        <div className="w-full flex flex-col gap-10">
          <ProfileForm name="홍길동" />
        </div>
      </div>
      <div className="bg-black bg-opacity-5 h-2" />
      <div className="w-full flex flex-col items-center justify-center px-5">
        <PrivacyContainer title="개인정보" subTitle="(야놀자 연동)">
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
      <div className="bg-black bg-opacity-5 h-2" />
      <div className="w-full flex flex-col items-center justify-center px-5">
        <PrivacyContainer title="알림">
          <PrivacyToggle title="시스템 알림 정보 설정" />
          <PrivacyToggle title="마케팅 정보 알림 설정" />
        </PrivacyContainer>
      </div>
    </div>
  );
};

export default page;
