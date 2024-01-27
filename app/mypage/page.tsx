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
import Logout from '@/components/mypage/logout';
import yanolja from '@/public/Yanolja_CI.png';
import Link from 'next/link';
import Image from 'next/image';

const page = async () => {
  return (
    <div className="w-full absolute top-0 h-[calc(100vh-66px)] overflow-y-scroll">
      <div className="px-5 py-4">
        <div className="w-full flex flex-col gap-6">
          {/* 유저 프로필 상단 배너 */}
          <ProfileContainer>
            <ProfileButton />
          </ProfileContainer>
          {/* 가지고 있는 포인트 계좌 내역 */}
          <AccountContainer>
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
      {/* 하단 배너 */}
      <div className="w-full h-2 bg-border" />
      <div className="px-5 py-4 bg-bg">
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
          {/* 로그아웃 컴포넌트 */}
          <Logout />
        </BannerContainer>
      </div>
      <div className="w-full h-5 bg-border" />
      <div className="px-5 bg-border pb-10">
        <div className="flex flex-col text-text-sub text-p3 ">
          <h1 className="pb-1 font-bold text-p1">캐치룸</h1>
          <p>
            <span className="font-bold">주소</span> 서울특별시 강남구 테헤란로
            108길 42
          </p>
          <p>
            <span className="font-bold">호스팅서비스 제공자</span> (주)야놀자
          </p>
          <p>
            <span className="font-bold">고객센터</span> 02-4989-4989 평일, 주말
            09:00 - 18:00 <br /> (점심시간 12:00 - 13:00)
          </p>
        </div>
        <div className="flex gap-[19px] text-text-secondary underline decoration-solid text-p2">
          <Link href="https://team4989faq.oopy.io/">
            <p>FAQ</p>
          </Link>
          <Link href="/mypage/dashboard/privacy">
            <p className="cursor-pointer">개인정보 처리방침</p>
          </Link>
          <Link href="/mypage/dashboard/terms">
            <p className="cursor-pointer">서비스 이용약관</p>
          </Link>
          <Image src={yanolja} alt="야놀자 로고" />
        </div>
        <div className="text-t4 text-text-sub">
          (주)야놀자는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의
          예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
