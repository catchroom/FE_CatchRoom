'use client';
import React, { useEffect } from 'react';
import { Alert } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { AlertMessageState, AlertOpenState } from '@/atoms/toastAlert/alert';

const ToastAlertComponent = () => {
  const [alertMessage] = useRecoilState<string>(AlertMessageState);
  const [isOpen, setIsOpen] = useRecoilState(AlertOpenState);
  const resetAlertMessage = useResetRecoilState(AlertMessageState);

  const alertCloseHandler = () => {
    setIsOpen(false);
    resetAlertMessage();
  };

  useEffect(() => {
    if (isOpen) {
      const floating = setTimeout(() => {
        setIsOpen(false);
        resetAlertMessage();
      }, 4000);
      return () => {
        clearTimeout(floating);
      };
    }
  }, [isOpen, setIsOpen, resetAlertMessage]);

  return (
    <div className="flex items-center fixed bottom-0  w-full  mb-28  z-[2000]">
      <Alert
        open={isOpen}
        className="relative flex items-center max-w-[440px] w-full h-[56px] py-2  rounded-[4px] mx-5 bg-gray-900 text-p2 text-white font-pretend shadow-xl"
        onClose={alertCloseHandler}
        animate={{
          mount: { y: 0 },
          unmount: { y: 0 },
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[4px] bg-gray-200 rounded-[4px]"
          style={{ width: isOpen ? '100%' : '0%' }}
          animate={{ width: isOpen ? '0%' : '100%' }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
        />

        <div className="flex justify-center mr-0">{alertMessage}</div>
      </Alert>
    </div>
  );
};

export default ToastAlertComponent;
