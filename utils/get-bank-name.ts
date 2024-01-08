import { BANK_LIST } from '@/constants/mypage';

/**
 * @function getBankName - 은행 코드를 받아서 은행 이름을 반환합니다.
 * @param bankCode - 잘 사용하세요
 * @returns
 */

export const getBankName = (bankCode: string) => {
  const bank = BANK_LIST.find((bank) => bank.value === bankCode);
  return bank?.name;
};
