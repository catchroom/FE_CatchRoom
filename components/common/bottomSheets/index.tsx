'use client';

import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import InputButton from '../sheetsButtons/inputButton';
import SimpleButton from '../sheetsButtons/simpleButton';
import SearchBoxButton from '../searchBoxButton';

/**
 * @function BottomSheets - bottom sheets component입니다. 모달 대체용으로 사용합니다.
 * @param children - 모달 내부에 들어갈 컴포넌트입니다. (필수)
 * @param title - 모달의 제목입니다. (필수)
 * @param innerTitle - 모달의 제목을 설정하는 props입니다. `기본값: '모달제목'` (선택)
 * @param innerButtonTitle - 모달의 버튼 제목을 설정하는 props입니다. `기본값: '버튼제목'` (선택)
 * @param buttonSelect - 모달을 열기 위한 버튼의 종류를 선택합니다. (선택)
 * @param placeholder - `buttonSelect가 search일 경우` 버튼으로 전달 될 placeholder입니다. (선택)
 * @param icon - `buttonSelect가 search일 경우` 버튼에 표시 될 아이콘입니다. (선택)
 * @summary - buttonSelect의 종류는 'input'과 'simple'이 있습니다. 'input'은 InputButton 컴포넌트를 사용하고, 'simple'은 SimpleButton 컴포넌트를 사용합니다. (default: 'simple')
 * @summary - 버튼을 추가하고 싶다면 components/common/sheetsButtons 폴더에 컴포넌트를 추가하고, buttonSelect에 해당 컴포넌트를 넣어주세요.
 * @param watchBank - 개인적으로 사용할 props여서 필요하면 사용하시면 됩니다. (선택)
 * @param closeButton - 모달 내부에 선택완료 버튼을 추가하고 싶다면 true로 설정해주세요. (선택)
 * @returns
 */

const BottomSheets = ({
  children,
  title,
  innerTitle = '모달제목',
  innerButtonTitle = '버튼제목',
  buttonSelect = 'simple',
  placeholder,
  icon,
  watchBank,
  closeButton = false,
}: {
  children: ReactNode;
  title: string;
  innerTitle?: string;
  innerButtonTitle?: string;
  buttonSelect?: 'input' | 'simple' | 'search';
  placeholder?: string;
  icon?: 'pin' | 'calendar' | 'person' | 'house';
  watchBank?: string;
  closeButton?: boolean;
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

  const ButtonComponent =
    buttonSelect === 'input' ? (
      <InputButton name={title} fn={modalOpen} watchBank={watchBank} />
    ) : buttonSelect === 'simple' ? (
      <SimpleButton name={title} fn={modalOpen} />
    ) : (
      buttonSelect === 'search' && (
        <SearchBoxButton
          icon={icon}
          onClickFunc={modalOpen}
          placeholder={placeholder}
        />
      )
    );

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
                className="absolute z-50 w-full min-h-[10%] bg-bg bottom-0 rounded-t-xl p-5"
              >
                <div className="relative flex justify-between">
                  <h1 className="text-t1 font-bold">{innerTitle}</h1>
                  <button
                    type="button"
                    data-testid="modalClose"
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
                      name={innerButtonTitle}
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
