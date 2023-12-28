import BannerContainer from '@/components/mypage/banner/bannerContainer';
import BannerItem from '@/components/mypage/banner/bannerItem';
import React from 'react';

import { MypageConstants } from '@/constants/mypage';
import ProfileContainer from '@/components/mypage/profile/profileContainer';
import ProfileButton from '@/components/mypage/profile/profileButton';

const page = () => {
  return (
    <div className="p-3 font-pretend">
      <div className="w-full flex flex-col gap-6">
        <ProfileContainer name="김민수" email="abcde@google.com">
          <ProfileButton />
        </ProfileContainer>
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
