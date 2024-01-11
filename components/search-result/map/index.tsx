'use client';
import React, { useEffect, useState } from 'react';
import { MapProps, MarkerProps } from '@/types/search-result/map/type';
import ToggleViewButtonWrapper from './toggleViewButtonWrapper';
import CatchSpecialComponentWrapper from './catchSpecialComponentWrapper';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const Map = ({ markers }: MapProps) => {
  const [selectedOverlayIndex, setSelectedOverlayIndex] = useState<
    number | null
  >(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] =
    useState<MarkerProps | null>(null);
  const [currentView, setCurrentView] = useState<'map' | 'list'>('map');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overlays: any[] = [];

  // 보기 상태를 토글(지도로보기, 리스트로보기 버튼)
  const toggleView = () => {
    setCurrentView(currentView === 'map' ? 'list' : 'map');
  };

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'),
          mapOption = {
            center: new window.kakao.maps.LatLng(
              markers[0].latitude,
              markers[0].longitude,
            ),
            level: 7,
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        markers.forEach((markerData, index) => {
          const markerPosition = new window.kakao.maps.LatLng(
            markerData.latitude,
            markerData.longitude,
          );

          const overlayContent = createCustomOverlayContent(
            markerData,
            index === selectedOverlayIndex,
            () => {
              setSelectedOverlayIndex(index);
              setSelectedMarkerInfo(markerData);
              updateOverlayZIndex();
            },
          );

          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: overlayContent,
            xAnchor: 0.5,
            yAnchor: 1,
          });
          overlays.push(customOverlay);
          customOverlay.setMap(map);
        });
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers, selectedOverlayIndex]);

  //오버레이 ZIndex 조정
  const updateOverlayZIndex = () => {
    overlays.forEach((overlay, index) => {
      overlay.setZIndex(index === selectedOverlayIndex ? 1000 : 1);
    });
  };

  // 커스텀 오버레이 생성
  const createCustomOverlayContent = (
    markerData: MarkerProps,
    isSelected: boolean,
    onClick: () => void,
  ) => {
    const overlayContent = document.createElement('div');
    overlayContent.className = 'custom-overlay';
    overlayContent.onclick = () => {
      updateOverlayZIndex();
      onClick();
    };

    overlayContent.style.cssText = `
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      white-space: nowrap;
      background: white;
      border: 1px solid ${isSelected ? '#FF3478' : '#dbdee3'};
      border-radius: 4px;
      padding: 0.5rem;
      font-family: 'Pretendard';
      font-weight: 600;
      transform: translate(-50%, -10%);
      position: absolute;
      bottom: 10px;
      left: 50%;
      width: 8.625rem;
      cursor: pointer; 
    `;

    const priceSpan = document.createElement('span');
    priceSpan.textContent = `${markerData.price.toLocaleString()}원`;
    priceSpan.style.color = '#15181e';
    priceSpan.style.fontWeight = '700';

    const discountSpan = document.createElement('span');
    discountSpan.textContent = `(${markerData.discountRate}%)`;
    discountSpan.style.color = '#FF3478';
    discountSpan.style.fontWeight = '600';

    overlayContent.appendChild(priceSpan);
    overlayContent.appendChild(discountSpan);

    if (isSelected && markerData.catchType) {
      const badge = document.createElement('div');
      badge.style.cssText = `
        position: absolute;
        top: -20px;
        left: 70%;
        transform: translateX(-50%);
        padding: 2px 8px;

        background-color: #FF3478;
        color: white;
        border-radius: 5.625rem;
        font-size: 14px;
        font-weight: 600;
      `;
      badge.textContent = '캐치특가';
      overlayContent.appendChild(badge);
    }

    return overlayContent;
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <div id="map" className="w-full h-full ">
      <CatchSpecialComponentWrapper selectedMarkerInfo={selectedMarkerInfo} />
      <ToggleViewButtonWrapper
        currentView={currentView}
        onViewChange={toggleView}
      />
    </div>
  );
};

export default Map;
