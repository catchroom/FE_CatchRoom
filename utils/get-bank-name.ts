import { BANK_LIST } from '@/constants/mypage';

export const getBankName = (bankCode: string) => {
  const bank = BANK_LIST.find((bank) => bank.value === bankCode);
  return bank?.name;
};
