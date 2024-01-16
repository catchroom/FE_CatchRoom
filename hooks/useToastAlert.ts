'use client';
import { AlertMessageState, AlertOpenState } from '@/atoms/toastAlert/alert';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

/**
 * @function useToastAlert -
 * @param Message -
 * @returns { isLoading, btnHandler } -
 * @example const { isOpen, alertMessage, alertOpenHandler, alertCloseHandler } = useToastAlert('작업을 완료했습니다.');
 */

export const useToastAlert = (message: string) => {
  const [isOpen, setIsOpen] = useRecoilState(AlertOpenState);
  const [, setAlertMessage] = useRecoilState<string>(AlertMessageState);

  const alertOpenHandler = () => {
    setAlertMessage(message);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const floating = setTimeout(() => {
        setIsOpen(false);
      }, 4000);
      return () => {
        clearTimeout(floating);
      };
    }
  }, [isOpen, setIsOpen]);

  return { alertOpenHandler };
};
