import { z } from 'zod';

export const nameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임은 2자 이상 8자 이하로 입력해주세요.')
    .max(8, '닉네임은 2자 이상 8자 이하로 입력해주세요.')
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '닉네임은 한글, 영문, 숫자만 입력 가능합니다.',
    ),
});

export type FormName = z.infer<typeof nameSchema>;
