'use client';

import { radioSchema } from '@/constants/zodSchema';
import { getSlashDate } from '@/utils/get-slash-date';
import { zodResolver } from '@hookform/resolvers/zod';
import { Radio } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const items = [
  {
    id: 1,
    productName: '제주신라호텔',
    check_In: new Date(),
    check_out: new Date(),
  },
  {
    id: 2,
    productName: '글래드 마포',
    check_In: new Date(),
    check_out: new Date(),
  },
];
const SaleItems = () => {
  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(radioSchema),
    defaultValues: {
      selectedProduct: '',
    },
  });

  const router = useRouter();

  const onSubmit = () => {
    // 선택된 값 처리
    console.log('success');
  };

  const selectedProduct = watch('selectedProduct');

  const handleButtonClick = () => {
    const selectedItem = items.find(
      (item) => item.productName === selectedProduct,
    );
    if (selectedProduct) router.push(`/sale?id=${selectedItem?.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start w-full mt-12 gap-3"
    >
      {items.map((item) => {
        const dateString = getSlashDate(item.check_In, item.check_out);
        return (
          <label key={item.id} className="flex items-center w-full">
            <Controller
              control={control}
              name="selectedProduct"
              render={({ field }) => (
                <Radio
                  crossOrigin="anonymous"
                  {...field}
                  color="pink"
                  type="radio"
                  key={item.id}
                  value={item.productName}
                  data-testid="radioButton"
                />
              )}
            />
            <p className="text-t2 font-semibold">
              {item.productName}{' '}
              <span className="text-text-sub font-normal">{dateString}</span>
            </p>
          </label>
        );
      })}
      <button
        onClick={handleButtonClick}
        type="submit"
        className={`w-full h-[44px] rounded mt-12 ${
          selectedProduct
            ? 'bg-action-primary text-text-on'
            : 'bg-action-secondary-disabled text-text-disabled disabled'
        }`}
      >
        확인
      </button>
    </form>
  );
};

export default SaleItems;
