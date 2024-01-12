// 숙소 정보를 등록하는 API

import { orderHistoryType, roomType } from '@/app/admin/page';

// eslint-disable-next-line
export const fetchMypageSelling = async (body: roomType) => {
  const response = await fetch(`/api/v1/admin/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: body.name,
      introduction: body.introduction,
      grade: Number(body.grade),
      type: Number(body.type),
      region: Number(body.region),
      thumbnail_url:
        'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
      service: ['netflix', 'wifi', 'kitchen', 'washer', 'airConditioner'],
      latitude: 37.510829,
      logitude: 127.029288,
    }),
  });
  const data = await response.json();
  return data.data;
};

// 모든 숙소 가져오기
export const fetchAllProduct = async () => {
  const response = await fetch(`/api/v1/admin/product`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

export const fetchOrderHistory = async (body: orderHistoryType) => {
  const response = await fetch(`/api/v1/admin/history`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accommodation_id: body.accommodation_id,
      room_id: 'room0',
      check_in: body.check_in,
      check_out: body.check_out,
      transportation: 'walk',
      user_id: 'obj0nAnnC2LSJ0EZYdes',
      price: body.price,
    }),
  });
  const data = await response.json();
  return data.data;
};

export const fetchSellingData = async () => {
  const response = await fetch(`/api/v1/admin/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

// eslint-disable-next-line
export const fetchEnrollSellingData = async (body: any) => {
  const response = await fetch('/api/v1/mypage/salesenroll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data.data;
};
