import { z } from 'zod';

export const nameSchema = z.object({
  nickname: z
    .string()
    .min(2, { message: '닉네임이 너무 짧아요' })
    .max(8, '닉네임은 2자 이상 8자 이하로 입력해주세요.')
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '닉네임은 한글, 영문, 숫자만 입력 가능합니다.',
    ),
});

export const accountSchema = z.object({
  account: z
    .string()
    .min(1, '계좌번호를 입력해주세요')
    .regex(/^[0-9]*$/, '계좌번호는 숫자만 입력 가능합니다.'),
  name: z
    .string()
    .min(2, '이름을 입력해주세요.')
    .regex(/^[a-zA-Z가-힣]*$/, '이름은 한글과 영어로만 입력 가능합니다.'),
});

export type FormName = z.infer<typeof nameSchema>;
export type FormAccount = z.infer<typeof accountSchema>;
