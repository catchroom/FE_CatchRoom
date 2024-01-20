'use client';
import { catchState } from '@/atoms/sale/catchAtom';
import BottomSheets from '@/components/common/bottomSheets';
import CheckBoxComponent from '@/components/common/checkBox';
import { checkBoxSchema } from '@/constants/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FromSeller from '../bottomSheetsContent/fromSeller';
import { allCheckState } from '@/atoms/sale/checkAtom';

const CheckboxContainer = () => {
  const isCatch = useRecoilValue(catchState);
  const setAllCheck = useSetRecoilState(allCheckState);

  const { watch, getValues, setValue } = useForm({
    resolver: zodResolver(checkBoxSchema(isCatch)),
    defaultValues: {
      allAgree: false,
      check1: false,
      check2: false,
      check3: false,
    },
  });

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const check1 = watch('check1');
  const check2 = watch('check2');
  const check3 = watch('check3');

  useEffect(() => {
    if (isCatch) {
      const checked = getValues('allAgree');
      setValue('check3', checked);
    }
  }, [isCatch, getValues, setAllCheck, setValue]);

  const handleAllCheck = (
    e: React.MouseEvent,
    id: 'allAgree' | 'check1' | 'check2' | 'check3',
  ) => {
    e.stopPropagation();

    const checked = !getValues(id);
    setValue(id, checked);

    if (id === 'allAgree') {
      setValue('check1', checked);
      setValue('check2', checked);
      if (isCatch) setValue('check3', checked);
      setAllCheck(checked);
    } else {
      if (isCatch) {
        const allAgreed =
          getValues('check1') && getValues('check2') && getValues('check3');
        setValue('allAgree', allAgreed);
      } else {
        const allAgreed = getValues('check1') && getValues('check2');
        setValue('allAgree', allAgreed);
      }
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 mb-24 ">
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="allAgree"
          labelText="전체동의"
          isBoxChecked={getValues('allAgree')}
          isLabelTextBold={true}
          handleSelectState={(e) => handleAllCheck(e, 'allAgree')}
          data-testid="allCheck"
        />
      </div>
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="check1"
          labelText="[필수] 개인정보 수집 및 이용"
          isBoxChecked={getValues('check1')}
          handleSelectState={(e) => handleAllCheck(e, 'check1')}
          data-testid="check1"
        />
        <Link
          href="/mypage/dashboard/terms"
          className="text-text-primary absolute right-0"
        >
          보기
        </Link>
      </div>
      <div className="flex items-center cursor-pointer relative">
        <CheckBoxComponent
          id="check2"
          labelText="[필수] 개인정보 제3자 제공"
          isBoxChecked={getValues('check2')}
          handleSelectState={(e) => handleAllCheck(e, 'check2')}
          data-testid="check1"
        />
        <Link
          href="/mypage/dashboard/terms"
          className="text-text-primary absolute right-0"
        >
          보기
        </Link>
      </div>
      {isCatch && (
        <div className="flex items-center cursor-pointer relative">
          <CheckBoxComponent
            id="check3"
            labelText="[필수] 캐치특가 자동 설정 동의"
            isBoxChecked={getValues('check3')}
            handleSelectState={(e) => handleAllCheck(e, 'check3')}
            data-testid="check3"
          />
          <Link
            href="/mypage/dashboard/terms"
            className="text-text-primary absolute right-0"
          >
            보기
          </Link>
        </div>
      )}
      <div className="cursor-pointer fixed bottom-0 w-full max-w-[480px] flex justify-center ">
        <div className="border-t border-border-sub bg-bg w-full p-5 -ml-10">
          <BottomSheets
            title="다음"
            innerTitle="판매자 한마디"
            buttonSelect="validation"
            data-testid="validation-button"
          >
            <FromSeller />
          </BottomSheets>
        </div>
      </div>
    </div>
  );
};

export default CheckboxContainer;
