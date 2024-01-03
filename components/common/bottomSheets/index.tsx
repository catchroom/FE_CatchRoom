'use client';

import React, { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SheetCloseSVG from '@/public/svg/sheet-close';

const BottomSheets = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [viewPortHeight, setViewPortHeight] = React.useState(0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);
  }, [viewPortHeight]);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
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
            className=" fixed bg-black backdrop-blur-sm bg-opacity-30 w-full max-w-[480px] h-full inset-y-0"
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
