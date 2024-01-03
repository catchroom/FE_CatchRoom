'use client';

import React, { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';
import InputButton from '../sheetsButtons/inputButton';
import SimpleButton from '../sheetsButtons/simpleButton';

const BottomSheets = ({
  children,
  title,
  buttonSelect = 'simple',
}: {
  children: ReactNode;
  title: string;
  buttonSelect?: 'input' | 'simple';
}) => {
  const [open, setOpen] = React.useState(false);
  const [viewPortHeight, setViewPortHeight] = React.useState(0);
  const ButtonComponent = buttonSelect === 'input' ? InputButton : SimpleButton;

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  return (
    <>
      <ButtonComponent name={title} fn={() => setOpen(true)} />
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
            className="fixed left-1/2 -translate-x-1/2 bg-black backdrop-blur-sm bg-opacity-30 w-full max-w-[480px] h-full inset-y-0"
          >
            <div className="relative w-full h-full">
              <motion.div
                initial={{ y: viewPortHeight }}
                animate={{ y: 0 }}
                exit={{ y: viewPortHeight }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: 'easeInOut',
                }}
                className="absolute w-full min-h-[50%] bg-bg bottom-0 rounded-t-xl p-5"
              >
                <div className="relative flex justify-center">
                  <h1 className="text-t1 font-bold">{title}</h1>
                  <button
                    className="absolute left-0"
                    onClick={() => setOpen(false)}
                  >
                    <SheetCloseSVG />
                  </button>
                </div>
                <div className="w-full h-full mt-3">{children}</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomSheets;
