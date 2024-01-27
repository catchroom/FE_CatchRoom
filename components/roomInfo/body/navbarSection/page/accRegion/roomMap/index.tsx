'use client';
import { useEffect } from 'react';

type OneMarkerProps = {
  latitude: number;
  longitude: number;
};

const RoomMap = ({ latitude, longitude }: OneMarkerProps) => {
  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'),
          mapOption = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 2,
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const imageSrc = '/svg/home-04.svg',
          imageSize = new window.kakao.maps.Size(30, 35);

        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          ),
          markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

        const newMarker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        newMarker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude, mapScript]);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <div id="map" className="w-full h-full rounded-lg" />;
};

export default RoomMap;
