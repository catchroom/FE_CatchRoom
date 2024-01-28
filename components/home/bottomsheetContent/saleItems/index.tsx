'use client';

import { radioSchema } from '@/constants/zodSchema';
import { salesItem } from '@/types/home/types';
import { getSlashDate } from '@/utils/get-slash-date';
import { zodResolver } from '@hookform/resolvers/zod';
import { Radio } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

type Props = {
  salesItem: salesItem[] | null;
};
const SaleItems = ({ salesItem }: Props) => {
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
    const selectedItem = salesItem?.find(
      (item) => item.accommdationName === selectedProduct,
    );
    if (selectedProduct) router.push(`/sale?id=${selectedItem?.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start w-full mt-8 gap-3 max-h-[580px] overflow-y-scroll"
    >
      {salesItem &&
        salesItem.map((item) => {
          const dateString = getSlashDate(item.checkIn, item.checkOut);
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
                    value={item.accommdationName}
                    data-testid="radioButton"
                  />
                )}
              />
              <p className="text-t2 font-semibold">
                {item.accommdationName}{' '}
                <span className="text-text-sub font-normal">{dateString}</span>
              </p>
            </label>
          );
        })}
      <button
        onClick={handleButtonClick}
        type="submit"
        className={`w-full h-[44px] min-h-[44px] rounded mt-8 ${
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
