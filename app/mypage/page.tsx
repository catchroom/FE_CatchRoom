import BannerContainer from '@/components/mypage/banner/bannerContainer';
import BannerItem from '@/components/mypage/banner/bannerItem';
import React from 'react';

import { MYPAGE_CONSTANTS } from '@/constants/mypage';
import ProfileContainer from '@/components/mypage/profile/profileContainer';
import ProfileButton from '@/components/mypage/profile/profileButton';
import AccountContainer from '@/components/mypage/account/accountContainer';
import AccountButton from '@/components/mypage/account/accountButton';
import BottomNav from '@/components/common/bottomNav';
import { Banners } from '@/types/mypage/types';

const fetchTest = async () => {
  const res = await fetch('https://catchroom.xyz/v1/test/do');
  const data = await res.text();
  console.log(data);
};

const page = async () => {
  await fetchTest();
  return (
    <div className="w-full absolute top-0 h-[calc(100vh-66px)] overflow-y-scroll">
      <div className="px-3 pt-4 bg-bg">
        <div className="w-full flex flex-col gap-6">
          {/* 유저 프로필 상단 배너 */}
          <ProfileContainer name="강남구청기념품12">
            <ProfileButton />
          </ProfileContainer>
          {/* 가지고 있는 포인트 계좌 내역 */}
          <AccountContainer balance={9500} account="1234-56-789-01">
            {MYPAGE_CONSTANTS.ACCOUNT_BUTTON.map((button) => {
              return (
                <AccountButton
                  key={button.TITLE}
                  text={button.TITLE}
                  location={button.LOCATION}
                />
              );
            })}
          </AccountContainer>
          {/* 나의활동 및 기타사항 클릭 배너 */}
          <BannerContainer text={MYPAGE_CONSTANTS.TOP_BANNER.TITLE}>
            {MYPAGE_CONSTANTS.TOP_BANNER.BANNERS.map((banner: Banners) => {
              return (
                <BannerItem
                  key={banner.TITLE}
                  text={banner.TITLE}
                  location={banner.LOCATION}
                  type={banner.TYPE}
                />
              );
            })}
          </BannerContainer>
        </div>
      </div>
      <div>
        {/* 하단 배너 */}
        <div className="w-full h-2 bg-border" />
        <div className="px-3 pt-4 bg-bg">
          <BannerContainer text={MYPAGE_CONSTANTS.BOTTOM_BANNER.TITLE}>
            {MYPAGE_CONSTANTS.BOTTOM_BANNER.BANNERS.map((banner) => {
              return (
                <BannerItem
                  key={banner.TITLE}
                  text={banner.TITLE}
                  location={banner.LOCATION}
                />
              );
            })}
            <p className="px-2 py-3 underline text-text-sub font-medium text-p2">
              로그아웃
            </p>
          </BannerContainer>
        </div>
        <div className="w-full flex flex-col items-start gap-1 bg-border px-3 py-4 text-p3 text-text-sub">
          <h1 className=" text-t3 font-bold">(주) 캐치룸</h1>
          <p>고객센터 02-4989-4989</p>
          <p>평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
