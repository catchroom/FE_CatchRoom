'use client';
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/api/mypage/api';

const PrivacyItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserProfile().then((res) => {
      if (res.code === 2004) {
        console.log(res.data);
        const { email, name, phoneNumber } = res.data;

        const updatedData = [
          { label: '아이디', value: email },
          { label: '이메일', value: email },
          { label: '이름', value: name },
          { label: '전화번호', value: phoneNumber },
        ];

        setData(updatedData);
      }
    });
  }, []);

  return (
    <>
      {data.map((item: { label: string; value: string }, index: number) => (
        <div key={index} className="flex gap-2 text-t3 font-medium">
          <p className="text-text-sub">{item.label}</p>
          <span>{item.value}</span>
        </div>
      ))}
    </>
  );
};

export default PrivacyItems;
