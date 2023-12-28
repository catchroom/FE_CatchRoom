import BannerContainer from '@/components/mypage/bannerContainer';
import BannerItem from '@/components/mypage/bannerItem';
import React from 'react';

import { MypageConstants } from '@/constants/mypage';

const page = () => {
  return (
    <div className="p-3">
      <div className="w-full flex flex-col gap-6">
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
