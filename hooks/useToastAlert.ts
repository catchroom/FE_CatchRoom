'use client';
import { AlertMessageState, AlertOpenState } from '@/atoms/toastAlert/alert';
import { useRecoilState } from 'recoil';

/**
 * @function useToastAlert - Alert 메세지를 지정하고, 알럿을 트리거할 버튼을 `alertOpenHandler`을 통해 지정할 수 있습니다.
 * @param Message - Alert에 띄울 메세지를 입력해주시면 됩니다.
 * @returns  alertOpenHandler - 알럿을 띄우고, 메세지를 지정하는 핸들러 함수입니다.
 * @example const { alertOpenHandler } = useToastAlert('작업을 완료했습니다.');
 */

export const useToastAlert = (message: string) => {
  const [, setIsOpen] = useRecoilState(AlertOpenState);
  const [, setAlertMessage] = useRecoilState<string>(AlertMessageState);

  const alertOpenHandler = () => {
    setAlertMessage(message);
    setIsOpen(true);
  };

  return { alertOpenHandler };
};
