'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
// import InfiniteScroll from 'react-infinite-scroller';
import LoginButton from '../LoginButton';
import axios from 'axios';

const fetchPage = async (token: string) => {
  const res = await axios.get(
    'https://catchroom.xyz/v1/chat/room/info?roomId=df16caeb-d73a-470a-af14-b7edf276ddc2',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await res.data;
  return result;
};

const InfiniteScrollWrapper = () => {
  const [cookies] = useCookies();
  const token = cookies.accessToken;

  const { data: asdfasdf, error } = useQuery({
    queryKey: ['messages'],
    queryFn: () => fetchPage(token),
  });

  console.log('data불러오기', asdfasdf);

  console.log('에러', error);

  return (
    <div>
      <LoginButton />
      <div>안녕안녕</div>
    </div>
  );
};

export default InfiniteScrollWrapper;
