import BannerContainer from '@/components/mypage/banner/bannerContainer';
import BannerItem from '@/components/mypage/banner/bannerItem';
import React from 'react';

import { MypageConstants } from '@/constants/mypage';
import ProfileContainer from '@/components/mypage/profile/profileContainer';
import ProfileButton from '@/components/mypage/profile/profileButton';
import AccountContainer from '@/components/mypage/account/accountContainer';
import AccountButton from '@/components/mypage/account/accountButton';

const page = () => {
  return (
    <div className="px-3 py-12">
      <div className="w-full flex flex-col gap-6">
        {/* 유저 프로필 상단 배너 */}
        <ProfileContainer name="김민수" email="abcde@google.com">
          <ProfileButton />
        </ProfileContainer>
        {/* 가지고 있는 포인트 계좌 내역 */}
        <AccountContainer balance={9500}>
          {MypageConstants.accountButton.map((button) => {
            return (
              <AccountButton
                key={button.title}
                text={button.title}
                location={button.location}
              />
            );
          })}
        </AccountContainer>
        {/* 나의활동 및 기타사항 클릭 배너 */}
        <BannerContainer text={MypageConstants.topBanner.title}>
          {MypageConstants.topBanner.banners.map((banner) => {
            return (
              <BannerItem
                key={banner.title}
                text={banner.title}
                location={banner.location}
              />
            );
          })}
        </BannerContainer>
        <BannerContainer text={MypageConstants.bottomBanner.title}>
          {MypageConstants.bottomBanner.banners.map((banner) => {
            return (
              <BannerItem
                key={banner.title}
                text={banner.title}
                location={banner.location}
              />
            );
          })}
        </BannerContainer>
      </div>
    </div>
  );
};

export default page;
