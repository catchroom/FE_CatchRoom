import BannerContainer from '@/components/mypage/banner/bannerContainer';
import BannerItem from '@/components/mypage/banner/bannerItem';
import React from 'react';

import { MypageConstants } from '@/constants/mypage';
import AccountContainer from '@/components/mypage/account/accountContainer';
import AccountButton from '@/components/mypage/account/accountButton';

const page = () => {
  return (
    <div className="p-3">
      <div className="w-full flex flex-col gap-6">
        <AccountContainer name="김민수" email="abcde@google.com">
          <AccountButton />
        </AccountContainer>
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
