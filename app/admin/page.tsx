'use client';

import {
  useAccQuery,
  useAdminMutation,
  useOrderMutation,
  useOrderQuery,
} from '@/api/admin/query';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import { AccommodationType } from '@/types/mypage/data-types';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { Radio } from '@material-tailwind/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const roomSchema = z.object({
  name: z.string({
    required_error: '이름은 필수 입력 사항입니다.',
  }),
  introduction: z.string({
    required_error: '설명은 필수 입력 사항입니다.',
  }),
  address: z.string({
    required_error: '주소는 필수 입력 사항입니다.',
  }),
  grade: z
    .string()
    .max(1, '숙소 등급은 0~5 사이의 숫자여야 합니다.')
    .min(1)
    .regex(/^[0-5]$/, '숙소 등급은 0~5 사이의 숫자여야 합니다.'),
  region: z
    .string()
    .max(1.5, '지역코드는 0~9 사이의 숫자여야 합니다.')
    .min(1)
    .regex(/^[0-9]$/, '지역코드는 0~9 사이의 숫자여야 합니다.'),
  type: z
    .string()
    .max(1, '숙소 타입은 0~5 사이의 숫자여야 합니다.')
    .min(1)
    .regex(/^[0-5]$/, '숙소 타입은 0~5 사이의 숫자여야 합니다.'),
});

const orderHistorySchema = z.object({
  accommodation_id: z.string({
    required_error: '숙소 아이디는 필수 입력 사항입니다.',
  }),
  check_in: z.string(),
  check_out: z.string(),
  price: z.string().regex(/^[0-9]+$/, '숫자만 입력 가능합니다.'),
});

export type orderHistoryType = z.infer<typeof orderHistorySchema>;
export type roomType = z.infer<typeof roomSchema>;

const 예약내역에필요한데이터 = [
  {
    label: '체크인 시간',
    value: 'check_in',
    type: 'date',
  },
  {
    label: '체크아웃 시간',
    value: 'check_out',
    type: 'date',
  },
  {
    label: '가격',
    value: 'price',
    type: 'text',
  },
];

const 방에필요한데이터 = [
  {
    label: '숙소 이름',
    value: 'name',
    type: 'text',
  },
  {
    label: '숙소 설명',
    value: 'introduction',
    type: 'text',
  },
  {
    label: '숙소 주소',
    value: 'address',
    type: 'text',
  },
  {
    label: '숙소 등급',
    value: 'grade',
    type: 'text',
  },
  {
    label: '지역코드',
    value: 'region',
    type: 'text',
  },
  {
    label: '숙소 타입',
    value: 'type',
    type: 'text',
  },
];

const RegisterAccommodationData = () => {
  const mutation = useAdminMutation('room');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<roomType>({
    resolver: zodResolver(roomSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<roomType> = (data) => {
    if (!roomSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    mutation.mutate(data);
    mutation.isSuccess && alert('성공적으로 추가되었습니다.');
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <h2 className="text-h2 py-3">방 추가</h2>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-3">
            {방에필요한데이터.map((data) => (
              <div className="flex flex-col" key={data.value}>
                <label htmlFor={data.value}>{data.label}</label>
                <input
                  type={data.type}
                  placeholder={data.label}
                  {...register(data.value as keyof roomType, {
                    required: true,
                  })}
                  className="border-2 border-gray-300 rounded-md h-12 p-3"
                />
                <ErrorMessage
                  errors={errors}
                  name={data.value as keyof roomType}
                  render={({ message }) => (
                    <p className="text-red-500">{message}</p>
                  )}
                />
              </div>
            ))}
          </div>

          <SimpleButton type="submit" name="전송" />
        </form>
      </div>
    </div>
  );
};

const ViewAccommodationData = () => {
  const { data: AccomodationData, isLoading } = useAccQuery();
  const mutation = useOrderMutation('order-history');
  const { register, handleSubmit } = useForm<orderHistoryType>({
    resolver: zodResolver(orderHistorySchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<orderHistoryType> = (data) => {
    if (!orderHistorySchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');
    mutation.mutate(data);
    mutation.isSuccess && alert('성공적으로 추가되었습니다.');
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <h2 className="text-h2 py-3">숙소 주문내역 추가하기</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start gap-5"
      >
        {isLoading && <div>로딩중...</div>}
        <label htmlFor="accommodation_id">숙소 아이디</label>
        <div className="grid grid-cols-2 gap-5">
          {AccomodationData &&
            AccomodationData.map((data: AccommodationType) => {
              return (
                <Radio
                  key={data.id}
                  color="blue"
                  crossOrigin="anonymous"
                  value={data.id}
                  label={data.name}
                  {...register('accommodation_id', { required: true })}
                />
              );
            })}
        </div>
        <div className="w-full flex flex-col gap-5">
          {예약내역에필요한데이터.map((data) => (
            <div className="flex flex-col w-full" key={data.value}>
              <label htmlFor={data.value}>{data.label}</label>
              <input
                type={data.type}
                placeholder={data.label}
                {...register(data.value as keyof orderHistoryType, {
                  required: true,
                })}
                className="border-2 border-gray-300 rounded-md h-12 p-3"
              />
            </div>
          ))}
        </div>
        <SimpleButton type="submit" name="전송" />
      </form>
    </div>
  );
};

const RegisterSellingAccomodation = () => {
  const { data, isLoading } = useOrderQuery();
  console.log(data);
  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <h2 className="text-h2 py-3">주문내역에서 판매 등록하기</h2>
      {isLoading && <div>로딩중...</div>}
    </div>
  );
};

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col px-5 pt-5 items-center gap-12">
      <h1 className="text-h1 py-5">데이터 추가하는 페이지 (개발용)</h1>
      {/* 숙소 데이터 추가하기 */}
      <RegisterAccommodationData />
      {/* 예약 데이터 추가하기 */}
      <ViewAccommodationData />
      {/* 판매 데이터 추가하기 */}
      <RegisterSellingAccomodation />
    </div>
  );
};

export default Page;
