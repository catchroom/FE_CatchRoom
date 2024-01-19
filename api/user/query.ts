import { useMutation } from '@tanstack/react-query';
import { nicknameCheck } from './api';

// 닉네임 중복 체크하는 커스텀 훅
export const useCheckNickname = () => {
  const mutation = useMutation({
    mutationKey: ['nicknameCheck'],
    mutationFn: (nickname: string) => nicknameCheck(nickname),
  });

  return mutation;
};
