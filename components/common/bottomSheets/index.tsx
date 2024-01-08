'use client';

import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import InputButton from '../sheetsButtons/inputButton';
import SimpleButton from '../sheetsButtons/simpleButton';
import SaleButton from '../sheetsButtons/saleButton';

/**
 * @function BottomSheets - bottom sheets component입니다. 모달 대체용으로 사용합니다.
 * @param children - 모달 내부에 들어갈 컴포넌트입니다. (필수)
 * @param title - 모달의 제목입니다. (필수)
 * @param buttonSelect - 모달을 열기 위한 버튼의 종류를 선택합니다. (선택)
 * @summary - buttonSelect의 종류는 'input'과 'simple'이 있습니다. 'input'은 InputButton 컴포넌트를 사용하고, 'simple'은 SimpleButton 컴포넌트를 사용합니다. (default: 'simple')
 * @summary - 버튼을 추가하고 싶다면 components/common/sheetsButtons 폴더에 컴포넌트를 추가하고, buttonSelect에 해당 컴포넌트를 넣어주세요.
 * @param watchBank - 개인적으로 사용할 props여서 필요하면 사용하시면 됩니다. (선택)
 * @param closeButton - 모달 내부에 선택완료 버튼을 추가하고 싶다면 true로 설정해주세요. (선택)
 * @returns
 */

const BottomSheets = ({
  children,
  title,
  buttonSelect = 'simple',
  watchBank,
  closeButton = false,
}: {
  children: ReactNode;
  title: string;
  watchBank?: string;
  closeButton?: boolean;
  buttonSelect?: 'input' | 'simple' | 'sale';
}) => {
  const [open, setOpen] = React.useState(false);
  const [viewPortHeight, setViewPortHeight] = React.useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  const modalOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const modalClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e,
  ) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  // const ButtonComponent =
  //   buttonSelect === 'input' ? (
  //     <InputButton name={title} fn={modalOpen} watchBank={watchBank} />
  //   ) : (
  //     <SimpleButton name={title} fn={modalOpen} />
  //   );
  const ButtonComponent = (() => {
    switch (buttonSelect) {
      case 'input':
        return (
          <InputButton name={title} fn={modalOpen} watchBank={watchBank} />
        );
      case 'sale':
        return <SaleButton name={title} fn={modalOpen} />;
      default:
        return <SimpleButton name={title} fn={modalOpen} />; // 기본값으로 사용될 컴포넌트
    }
  })();

  return (
    <>
      {ButtonComponent}
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
                  <h1 className="text-t1 font-bold">{title}</h1>
                  <button
                    type="button"
                    data-testid="modalClose"
                    className="absolute left-0"
                    onClick={() => setOpen(false)}
                  >
                    <SheetCloseSVG />
                  </button>
                </div>
                <div className="w-full h-full mt-3 flex flex-col items-center gap-12">
                  {children}
                  {closeButton && (
                    <SimpleButton
                      fn={modalClose}
                      name="선택완료"
                      type="button"
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomSheets;
