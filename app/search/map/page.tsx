import Header from '@/components/common/header';
import Map from '@/components/search/map';

import Script from 'next/dist/client/script';
import React from 'react';

// const latitude = 33.4853707;
// const longitude = 126.4815713;

const markers = [
  { latitude: 33.4853707, longitude: 126.4815713 },
  { latitude: 33.487804488150005, longitude: 126.48189425468445 },
];

const page = () => {
  return (
    <>
      <Header title="검색 결과" showBackButton showBorder />
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`}
      />
      <Map markers={markers} />
    </>
  );
};

export default page;
