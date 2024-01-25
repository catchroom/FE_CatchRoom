import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useSsrAtom } from '@/atoms/chat/chatContentAtom';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/mypage/form/formInput';
import SimpleButton from '@/components/common/sheetsButtons/simpleButton';
import FormError from '@/components/mypage/form/formError';
import { ErrorMessage } from '@hookform/error-message';
import { useSetRecoilState } from 'recoil';
import { dealModalAtom } from '@/atoms/chat/leaveButton';

const schema = (price: number) =>
  z.object({
    price: z
      .string()
      .regex(/^[0-9]*$/, '출금액은 숫자만 입력 가능합니다.')
      .refine((value) => Number(value) > price * 0.1, {
        message: '판매가의 10%까지 입력 가능합니다.',
      })
      .refine((value) => Number(value) < price, {
        message: '판매가보다 작은 금액을 입력해주세요.',
      }),
  });

type Inputs = {
  price: string;
};

const OfferModal = ({ publish }: { publish: (price: number) => void }) => {
  const setModalState = useSetRecoilState(dealModalAtom);
  const [chatInfo] = useSsrAtom();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema(chatInfo.sellPrice)),
    mode: 'onChange',
  });

  const inputValue = watch('price');

  const disabledButton = () => {
    if (errors.price || !inputValue) {
      return true;
    }
    return false;
  };

  const closeModal = () => {
    setModalState(false);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (schema(chatInfo.sellPrice).safeParse(data)) {
      publish(Number(data.price));
      reset();
      closeModal();
    } else {
      console.log('제안하기 실패');
    }
  };

  return (
    <div className="absolute inset-0 w-full -top-1 bg-bg border-t border-border-sub">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 flex flex-col gap-2"
      >
        <FormInput
          value="price"
          reset={reset}
          placeholder="판매가의 10%까지 입력 가능"
          register={register}
          won={true}
          inputOn={!!inputValue}
        />
        <ErrorMessage
          errors={errors}
          name="price"
          render={({ message }) => <FormError message={message} />}
        />
        <p className="text-p2 text-text-sub leading-[20px]">
          건전한 네고를 위해 무리한 제안은 지양해 주세요. <br />
          최종결제금액은 구매수수료 5%가 추가 합산됩니다.
        </p>
        <div className="mt-7">
          <SimpleButton
            name="제안하기"
            type="submit"
            disabled={disabledButton()}
          />
        </div>
      </form>
    </div>
  );
};

export default OfferModal;
