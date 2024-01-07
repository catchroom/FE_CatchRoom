'use client';

import React, { MouseEventHandler, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const commonCheckStyle =
  "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10";

const LoginSheet = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [viewPortHeight, setViewPortHeight] = React.useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  const modalClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e,
  ) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  const goToSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push('/signup');
  };

  const { register, watch, getValues, setValue } = useForm({
    defaultValues: {
      allAgree: false,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
    },
  });

  const handleAllAgreeChange = () => {
    const newValue = !getValues('allAgree');
    setValue('allAgree', newValue);
    setValue('agree1', newValue);
    setValue('agree2', newValue);
    setValue('agree3', newValue);
    setValue('agree4', newValue);
  };

  const agree1 = watch('agree1');
  const agree2 = watch('agree2');

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="fixed z-40 left-1/2 -translate-x-1/2 bg-black backdrop-blur-sm bg-opacity-30 w-full max-w-[480px] h-full inset-y-0"
          >
            <div
              data-testid="modalBg"
              onClick={modalClose}
              className="relative w-full h-full"
            >
              <motion.div
                initial={{ y: viewPortHeight }}
                animate={{ y: 0 }}
                exit={{ y: viewPortHeight }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: 'easeInOut',
                }}
                className="absolute z-50 w-full min-h-[50%] bg-bg bottom-0 rounded-t-xl p-5"
              >
                <div className="relative flex justify-center">
                  <h1 className="text-t1 font-bold text-black">약관 동의</h1>
                  <button
                    type="button"
                    data-testid="modalClose"
                    className="absolute left-0"
                    onClick={() => setOpen(false)}
                  >
                    <SheetCloseSVG />
                  </button>
                </div>

                <div className="w-full h-full mt-3 flex flex-col text-black text-p1">
                  <div className="flex border border-gray-500 rounded-md p-3 mb-3 mt-2">
                    <input
                      type="checkbox"
                      {...register('allAgree')}
                      onChange={handleAllAgreeChange}
                      className={commonCheckStyle}
                    />
                    <span className="pl-3">
                      <span className="text-t1 font-bold">전체동의</span>
                      <span className="text-gray-400"> (선택 포함)</span>
                    </span>
                  </div>

                  <div className="flex p-3 mb-3">
                    <input
                      type="checkbox"
                      {...register('agree1')}
                      className={commonCheckStyle}
                    />
                    <span className="pl-3">
                      만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용
                      동의 (필수)
                    </span>
                  </div>

                  <div className="flex p-3 mb-3">
                    <input
                      type="checkbox"
                      {...register('agree2')}
                      className={commonCheckStyle}
                    />
                    <span className="pl-3">
                      거래 관련 필수 알림 발송 동의 (필수)
                    </span>
                  </div>

                  <div className="flex p-3 mb-3">
                    <input
                      type="checkbox"
                      {...register('agree3')}
                      className={commonCheckStyle}
                    />
                    <span className="pl-3">
                      개인정보 수집 및 이용 동의 (선택)
                    </span>
                  </div>

                  <div className="flex p-3 mb-3">
                    <input
                      type="checkbox"
                      {...register('agree4')}
                      className={commonCheckStyle}
                    />
                    <span className="pl-3">
                      개인정보 수집 및 이용 동의 (선택)
                    </span>
                  </div>

                  <button
                    className={`w-full h-[3rem] font-pretend text-t2 font-medium text-text-on rounded-md ${
                      !agree1 || !agree2 ? 'bg-gray-400' : 'bg-focus'
                    }`}
                    type="submit"
                    onClick={goToSignUp}
                    disabled={!agree1 || !agree2}
                  >
                    동의하고 계속하기
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginSheet;
