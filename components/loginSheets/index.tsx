'use client';

import React, { MouseEventHandler, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import CheckBoxComponent from '../common/checkBox';
import { CheckboxId } from '@/types/login/types';

const checkDivStyle = 'flex justify-between pl-3 p-2 mb-2';

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
    event.preventDefault();
    router.push('/signup');
  };

  const { watch, getValues, setValue } = useForm({
    defaultValues: {
      allAgree: false,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
      agree5: false,
      agree6: false,
    },
  });

  const handleAgreeChange = (e: React.MouseEvent, id: CheckboxId) => {
    e.preventDefault();
    e.stopPropagation();

    const newValue = !getValues(id);
    setValue(id, newValue);

    if (id === 'allAgree') {
      setValue('agree1', newValue);
      setValue('agree2', newValue);
      setValue('agree3', newValue);
      setValue('agree4', newValue);
      setValue('agree5', newValue);
      setValue('agree6', newValue);
    } else {
      const allAgreed =
        getValues('agree1') &&
        getValues('agree2') &&
        getValues('agree3') &&
        getValues('agree4') &&
        getValues('agree5') &&
        getValues('agree6');

      setValue('allAgree', allAgreed);
    }
  };

  const allAgree = watch('allAgree');
  const agree1 = watch('agree1');
  const agree2 = watch('agree2');
  const agree3 = watch('agree3');
  const agree4 = watch('agree4');

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
                    <div className="flex">
                      <CheckBoxComponent
                        id="allAgree"
                        data-testid="allAgree"
                        labelText="전체동의"
                        isBoxChecked={allAgree}
                        handleSelectState={(event) =>
                          handleAgreeChange(event, 'allAgree')
                        }
                        isLabelTextBold={true}
                      />
                      <span className="pl-1 text-gray-400 flex-shrink-0">
                        (선택 포함)
                      </span>
                    </div>
                  </div>

                  <div className="flex pl-3 p-2 mb-2">
                    <CheckBoxComponent
                      id="Agree1"
                      labelText="만 14세 이상입니다. (필수)"
                      isBoxChecked={getValues('agree1')}
                      handleSelectState={(event) =>
                        handleAgreeChange(event, 'agree1')
                      }
                    />
                  </div>

                  <div className={checkDivStyle}>
                    <div className="flex">
                      <CheckBoxComponent
                        id="Agree2"
                        labelText="서비스 이용 약관 동의 (필수)"
                        isBoxChecked={getValues('agree2')}
                        handleSelectState={(event) =>
                          handleAgreeChange(event, 'agree2')
                        }
                      />
                    </div>
                    <div
                      className="text-raspberry"
                      onClick={() => {
                        router.push('/mypage/dashboard/terms');
                      }}
                    >
                      보기
                    </div>
                  </div>

                  <div className={checkDivStyle}>
                    <div className="flex">
                      <CheckBoxComponent
                        id="Agree3"
                        labelText="개인정보 수집 및 이용 동의 (필수)"
                        isBoxChecked={getValues('agree3')}
                        handleSelectState={(event) =>
                          handleAgreeChange(event, 'agree3')
                        }
                      />
                    </div>
                    <Link
                      href="/mypage/dashboard/conditions/consent-essential"
                      className="text-raspberry"
                    >
                      보기
                    </Link>
                  </div>

                  <div className="flex p-2 pl-3 mb-2">
                    <CheckBoxComponent
                      id="Agree4"
                      labelText=" 거래관련 필수 알림 수신 동의 (필수)"
                      isBoxChecked={getValues('agree4')}
                      handleSelectState={(event) =>
                        handleAgreeChange(event, 'agree4')
                      }
                    />
                  </div>

                  <div className={checkDivStyle}>
                    <div className="flex">
                      <CheckBoxComponent
                        id="Agree5"
                        data-testid="Agree5"
                        labelText="개인정보 수집 및 이용 동의 (선택)"
                        isBoxChecked={getValues('agree5')}
                        handleSelectState={(event) =>
                          handleAgreeChange(event, 'agree5')
                        }
                      />
                    </div>
                    <Link
                      href="/mypage/dashboard/conditions/consent-options"
                      className="text-raspberry"
                    >
                      보기
                    </Link>
                  </div>

                  <div className="flex p-2 pl-3 mb-2">
                    <CheckBoxComponent
                      id="Agree6"
                      labelText="마케팅 정보 수신 동의 (선택)"
                      isBoxChecked={getValues('agree6')}
                      handleSelectState={(event) =>
                        handleAgreeChange(event, 'agree6')
                      }
                    />
                  </div>

                  <button
                    className={`mt-2 w-full h-[3rem] font-pretend text-t2 font-medium text-text-on rounded-md ${
                      !agree1 || !agree2 || !agree3 || !agree4
                        ? 'bg-gray-400'
                        : 'bg-focus'
                    }`}
                    type="submit"
                    onClick={goToSignUp}
                    disabled={!agree1 || !agree2 || !agree3 || !agree4}
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
