'use client';
import CatchSpecialComponent from '@/components/common/catchComponent';
import React, { useEffect, useState } from 'react';
import { ITEMS_INFO } from '@/constants/catchItems';
import ToggleViewButton from '../toggleViewButton';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type MarkerProps = {
  latitude: number;
  longitude: number;
  price: number;
  discountRate: number;
  catchType: boolean;
};

type MapProps = {
  markers: MarkerProps[];
};

const Map = ({ markers }: MapProps) => {
  const [selectedOverlayIndex, setSelectedOverlayIndex] = useState<
    number | null
  >(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] =
    useState<MarkerProps | null>(null);
  const [currentView, setCurrentView] = useState<'map' | 'list'>('map');

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
            level: 6,
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
            },
          );

          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: overlayContent,
            xAnchor: 0.5,
            yAnchor: 1,
          });

          overlayContent.onclick = () => {
            setSelectedOverlayIndex(index);
            setSelectedMarkerInfo(markerData);
          };

          customOverlay.setMap(map);
        });
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [markers, selectedOverlayIndex]);

  const createCustomOverlayContent = (
    markerData: MarkerProps,
    isSelected: boolean,
    onClick: () => void,
  ) => {
    const overlayContent = document.createElement('div');
    overlayContent.className = 'custom-overlay';
    overlayContent.onclick = onClick;

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
        background-color: #FF3478;
        color: white;
        padding: 2px 8px;
        border-radius: 5.625rem;
        font-size: 14px;
        font-weight: 600;
      `;
      badge.textContent = '캐치특가';
      overlayContent.appendChild(badge);
    }

    return overlayContent;
  };

  const renderCatchSpecialComponent = () => {
    if (!selectedMarkerInfo) return null;

    const firstRoomItem = ITEMS_INFO.roomItems[0];

    return (
      <div className="absolute bottom-[14rem] left-1/2 transform -translate-x-1/2 w-9/12 z-10 p-3 px-3 bg-white">
        <CatchSpecialComponent
          roomName={firstRoomItem.roomName}
          roomType={firstRoomItem.roomType}
          resDate={firstRoomItem.resDate}
          oldPrice={firstRoomItem.oldPrice}
          discount={firstRoomItem.discount}
        />
      </div>
    );
  };

  const renderToggleButton = () => {
    const onViewChange = () => {
      setCurrentView(currentView === 'map' ? 'list' : 'map');
    };

    return (
      <div className="absolute  bottom-[10rem] left-1/2 transform -translate-x-1/2 z-20">
        <ToggleViewButton
          currentView={currentView}
          onViewChange={onViewChange}
        />
      </div>
    );
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <div id="map" className="w-full h-full rounded-lg">
      {renderCatchSpecialComponent()}
      {renderToggleButton()}
    </div>
  );
};

export default Map;
