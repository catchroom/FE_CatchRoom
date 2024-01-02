import { z } from 'zod';

export const nameSchema = z.object({
  nickname: z
    .string()
    .min(2)
    .max(8)
    .trim()
    .refine((value) => /^[a-zA-Z0-9가-힣]*$/g.test(value), {
      message: '닉네임은 영문, 한글, 숫자만 입력 가능합니다.',
    }),
});

export type FormName = z.infer<typeof nameSchema>;
