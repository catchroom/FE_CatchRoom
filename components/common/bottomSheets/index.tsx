'use client';

import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import InputButton from '../sheetsButtons/inputButton';
import SimpleButton from '../sheetsButtons/simpleButton';
import SaleButton from '../sheetsButtons/saleButton';
import SearchBoxButton from '../searchBoxButton';
import { useRecoilState } from 'recoil';
import { outerBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import PriceButton from '../sheetsButtons/priceButton';

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
 * @param closeButton - 모달 내부에 선택완료 버튼을 추가하고 싶다면 true로 설정해주세요. (선택)
 * @param outerControl - 모달을 외부에서 컨트롤 하고 싶다면 true로 설정해주세요. (선택) outerBottomSheetsControl atom을 사용합니다.
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
  closeButton = false,
  outerControl = false,
  price,
  percent,
}: {
  children: ReactNode;
  title: string;
  innerTitle?: string;
  innerButtonTitle?: string;
  buttonSelect?: 'input' | 'simple' | 'search' | 'sale' | 'price';
  placeholder?: string;
  icon?: 'pin' | 'calendar' | 'person' | 'house';
  closeButton?: boolean;
  outerControl?: boolean;
  price?: number;
  percent?: number;
}) => {
  const [open, setOpen] = useState(false);
  const [outerOpen, setOuterOpen] = useRecoilState(outerBottomSheetsControl);
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  const isOpenModal = outerControl ? outerOpen : open;

  const modalOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    outerControl ? setOuterOpen(true) : setOpen(true);
  };

  const closeControl = (outerControl: boolean) => {
    return outerControl ? setOuterOpen(false) : setOpen(false);
  };

  const modalClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e,
  ) => {
    if (e.currentTarget.id === 'modalClose') return closeControl(outerControl);
    else if (e.target !== e.currentTarget) return;
    else return closeControl(outerControl);
  };

  const ButtonsComponentsObjects: Record<string, React.JSX.Element> = {
    input: <InputButton name={title} fn={modalOpen} />,
    simple: <SimpleButton name={title} fn={modalOpen} />,
    search: (
      <SearchBoxButton
        icon={icon}
        onClickFunc={modalOpen}
        placeholder={placeholder}
      />
    ),
    sale: <SaleButton name={title} fn={modalOpen} />,
    price: <PriceButton fn={modalOpen} price={price} percent={percent} />,
  };

  return (
    <>
      {ButtonsComponentsObjects[buttonSelect]}
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="fixed z-[999] left-1/2 -translate-x-1/2 bg-black backdrop-blur-sm bg-opacity-30 w-full max-w-[480px] h-full inset-y-0"
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
                className="absolute z-[1000] w-full min-h-[10%] bg-surface bottom-0 rounded-t-xl p-5"
              >
                <div className="relative flex justify-between">
                  <h1 className="text-t1 font-bold">{innerTitle}</h1>
                  <button
                    type="button"
                    data-testid="modalClose"
                    onClick={modalClose}
                    id="modalClose"
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
