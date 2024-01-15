'use client';

import {
  useAccQuery,
  useAdminMutation,
  useOrderMutation,
  useOrderQuery,
  useSellingMutation,
} from '@/api/admin/query';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import {
  AccommodationType,
  sellingHistoryType,
} from '@/types/mypage/data-types';
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

const sellingSchema = z.object({
  order_history_id: z.string({
    required_error: '주문내역 아이디는 필수 입력 사항입니다.',
  }),
  state: z.string({
    required_error: '상태는 필수 입력 사항입니다.',
  }),
  introduction: z
    .string({
      required_error: '필수 입력 사항입니다.',
    })
    .max(100, '100자 이내로 입력해주세요.'),
  write_date: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
  end_date: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
  discount: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
  sell_price: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
  catch_price: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
  actual_profit: z.string({
    required_error: '필수 입력 사항입니다.',
  }),
});

export type sellingType = z.infer<typeof sellingSchema>;
export type orderHistoryType = z.infer<typeof orderHistorySchema>;
export type roomType = z.infer<typeof roomSchema>;

export const 판매에필요한데이터 = [
  {
    label: '소개',
    value: 'introduction',
    type: 'text',
  },
  {
    label: '작성일',
    value: 'write_date',
    type: 'date',
  },
  {
    label: '종료일',
    value: 'end_date',
    type: 'date',
  },
];

export const 할인률 = [
  {
    label: 'discount1',
    value: 30,
  },
  {
    label: 'discount2',
    value: 50,
  },
  {
    label: 'discount3',
    value: 70,
  },
];

export const 판매상태 = [
  {
    label: '판매중',
    value: 'ing',
  },
  {
    label: '판매완료',
    value: 'done',
  },
  {
    label: '기한만료',
    value: 'expirationDate',
  },
  {
    label: '판매불가',
    value: 'notForSale',
  },
];

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

  const onSubmit: SubmitHandler<roomType> = (data: roomType) => {
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
                  render={({ message }: { message: string }) => (
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
  const mutation = useSellingMutation('selling');
  const { data, isLoading } = useOrderQuery();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<sellingType>({
    resolver: zodResolver(sellingSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<sellingType> = (data) => {
    if (!sellingSchema.safeParse(data))
      return alert('입력값이 올바르지 않습니다.');

    const sendData = {
      actual_profit: Number(data.actual_profit),
      catch_price: Number(data.catch_price),
      discount: Number(data.discount),
      end_date: data.end_date,
      introduction: data.introduction,
      order_history_id: data.order_history_id,
      sell_price: Number(data.sell_price),
      state: data.state,
      write_date: data.write_date,
      is_auth_catch: true,
      is_catch: true,
      is_nego: true,
      user_id: 'obj0nAnnC2LSJ0EZYdes',
      catch_price_start_date: data.end_date,
    };

    mutation.mutate(sendData);
    mutation.isSuccess && alert('성공적으로 추가되었습니다.');
  };

  const handleRadioClick = (price: number) => {
    setValue('sell_price', String(price));
  };

  const handleDiscountClick = (discount: string) => {
    setValue('discount', discount);

    const price = Number(getValues('sell_price'));
    const discountPrice = price * (Number(discount) / 100);
    const sellPrice = price - discountPrice;
    setValue('catch_price', String(sellPrice));
    const commission = sellPrice * 0.15;

    const finalPrice = sellPrice - commission;
    setValue('actual_profit', String(finalPrice));
  };

  return (
    <div className="w-full flex flex-col gap-5 p-3 border border-border-primary rounded-lg">
      <h2 className="text-h2 py-3">주문내역에서 판매 등록하기</h2>
      {isLoading && <div>로딩중...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-5">
          {data &&
            data.map((data: sellingHistoryType) => (
              <div
                key={data.order_history_id}
                className="w-full flex items-start gap-3"
              >
                <Radio
                  crossOrigin="anonymouse"
                  value={data.order_history_id}
                  {...register('order_history_id', { required: true })}
                  onClick={() => handleRadioClick(data.price)}
                />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-baseline">
                    <h5 className="text-t1 font-bold">{data.productName}</h5>
                    <p>가격 : {data.price}</p>
                  </div>
                  <p>
                    {data.check_in} - {data.check_out}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-5 py-5">
          {판매에필요한데이터.map((item) => {
            return (
              <div className="flex flex-col w-full" key={item.value}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type={item.type}
                  placeholder={item.label}
                  {...register(item.value as keyof sellingType, {
                    required: true,
                  })}
                  className="border-2 border-gray-300 rounded-md h-12 p-3"
                />
                {errors[item.value as keyof sellingType] && (
                  <p className="text-red-500">필수 입력 사항입니다.</p>
                )}
              </div>
            );
          })}
        </div>
        <h3>할인률</h3>
        <div className="w-full flex justify-around gap-3 pt-3 pb-10">
          {할인률.map((item) => {
            return (
              <div key={item.value} className="flex flex-col items-center">
                <Radio
                  crossOrigin="anonymouse"
                  value={item.value}
                  {...register('discount', { required: true })}
                  onClick={() => handleDiscountClick(String(item.value))}
                />
                <p>{item.value}% 할인</p>
              </div>
            );
          })}
          {errors.discount && (
            <p className="text-red-500">할인률을 선택해주세요.</p>
          )}
        </div>

        <div className="w-full grid grid-cols-2 gap-3 pt-3 pb-10 ">
          {판매상태.map((item) => {
            return (
              <div key={item.value} className="flex items-center">
                <Radio
                  crossOrigin="anonymouse"
                  value={item.value}
                  key={item.value}
                  {...register('state', { required: true })}
                />
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
        {errors.state && (
          <p className="text-red-500">판매 상태를 선택해주세요.</p>
        )}

        <SimpleButton type="submit" name="전송" />
      </form>
    </div>
  );
};

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col px-5 pt-5 items-center gap-12">
      <h1 className="text-h1 py-5">데이터 추가하는 페이지 (개발용)</h1>
      <RegisterSellingAccomodation />
      {/* 숙소 데이터 추가하기 */}
      <RegisterAccommodationData />
      {/* 예약 데이터 추가하기 */}
      <ViewAccommodationData />
      {/* 판매 데이터 추가하기 */}
    </div>
  );
};

export default Page;
