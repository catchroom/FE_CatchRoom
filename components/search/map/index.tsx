'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type MapProps = {
  markers: Array<{ latitude: number; longitude: number }>;
};

const Map = ({ markers }: MapProps) => {
  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'),
          mapOption = {
            center: new window.kakao.maps.LatLng(
              markers[0].latitude,
              markers[0].longitude,
            ),
            level: 3,
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        markers.forEach((marker) => {
          const imageSrc = '/svg/home.svg',
            imageSize = new window.kakao.maps.Size(30, 35),
            imageOption = { offset: new window.kakao.maps.Point(27, 69) };

          const markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption,
            ),
            markerPosition = new window.kakao.maps.LatLng(
              marker.latitude,
              marker.longitude,
            );

          const newMarker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });

          newMarker.setMap(map);
        });
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <div id="map" className="w-full h-full rounded-lg"></div>;
};

export default Map;
