'use client';

import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import {
  outerBottomSheetsControl,
  outerDatePickerBottomSheetsControl,
  outerMoreBottomSheetsControl,
} from '@/atoms/commons/outerBottomSheetsControl';
import DropdownButton from '../sheetsButtons/dropdownButton';
import TimePickerButton from '../sheetsButtons/calendarButton';
import MoreButton from '../sheetsButtons/moreButton';
import SortOptionsButton from '@/components/search-result/list/sortOptionsButton';
/**
 * @function BottomSheetsWithoutCloseBtn - bottom sheets component입니다. 모달 대체용으로 사용합니다.
 * @param children - 모달 내부에 들어갈 컴포넌트입니다. (필수)
 * @param title - 모달의 제목입니다. (필수)
 * @param buttonSelect - 모달을 열기 위한 버튼의 종류를 선택합니다. (선택)
 * @summary - buttonSelect의 종류는 'input'과 'simple'이 있습니다. 'input'은 InputButton 컴포넌트를 사용하고, 'simple'은 SimpleButton 컴포넌트를 사용합니다. (default: 'simple')
 * @summary - 버튼을 추가하고 싶다면 components/common/sheetsButtons 폴더에 컴포넌트를 추가하고, buttonSelect에 해당 컴포넌트를 넣어주세요.
 * @param outerControl - 모달을 외부에서 컨트롤 하고 싶다면 true로 설정해주세요. (선택) outerBottomSheetsControl atom을 사용합니다.
 * @returns
 */

const BottomSheetsWithoutCloseBtn = ({
  children,
  title,
  buttonSelect = 'dropdown',
  outerControl = true,
  outerControlAtom = 'default',
}: {
  children: ReactNode;
  title?: string;
  buttonSelect?: 'dropdown' | 'timePicker' | 'more' | 'sortOptions';
  outerControl?: boolean;
  outerControlAtom?: 'default' | 'datePicker' | 'more';
}) => {
  const [open, setOpen] = useState(false);

  const outerControlState = {
    default: outerBottomSheetsControl,
    datePicker: outerDatePickerBottomSheetsControl,
    more: outerMoreBottomSheetsControl,
  };

  const [outerOpen, setOuterOpen] = useRecoilState(
    outerControlState[outerControlAtom],
  );
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  const isOpenModal = outerControl ? outerOpen : open;

  const modalOpen: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    e,
  ) => {
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
    dropdown: <DropdownButton name={title as string} fn={modalOpen} />,
    timePicker: <TimePickerButton name={title as string} fn={modalOpen} />,
    more: <MoreButton fn={modalOpen} />,
    sortOptions: <SortOptionsButton name={title as string} fn={modalOpen} />,
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
                <div className="w-full h-full flex flex-col items-center gap-12">
                  {children}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomSheetsWithoutCloseBtn;
