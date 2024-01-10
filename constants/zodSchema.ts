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
    .min(1, '계좌번호를 입력해주세요.')
    .regex(/^[0-9]*$/, '계좌번호는 숫자만 입력 가능합니다.'),
  name: z
    .string()
    .min(2, '이름을 입력해주세요.')
    .regex(/^[a-zA-Z가-힣]*$/, '이름은 한글과 영어로만 입력 가능합니다.'),
  bank: z.string({
    required_error: '은행을 선택해주세요.',
  }),
});

export const withdrawSchema = (originalBalance: number) =>
  z.object({
    balance: z
      .string()
      .min(1, '출금 가능 금액을 입력해주세요.')
      .regex(/^[0-9]*$/, '출금액은 숫자만 입력 가능합니다.')
      .refine((value) => Number(value) < originalBalance, {
        message: '출금 가능 금액을 확인해주세요.',
      }),
  });

export const reviewSchema = z.object({
  content: z
    .string()
    .min(1, '리뷰를 입력해주세요.')
    .max(100, '리뷰는 100자 이하로 입력해주세요.'),
});

export type FormWithdraw = {
  balance: string;
};

export type FormReview = z.infer<typeof reviewSchema>;
export type FormName = z.infer<typeof nameSchema>;
export type FormAccount = z.infer<typeof accountSchema>;

//비밀번호와 필드 검사
export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상 20자 이하로 입력해주세요.' })
      .max(20, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        '비밀번호는 영문 + 숫자 + 특수문자 조합으로 설정해주세요.',
      ),
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export const authDataSchema = z
  .object({
    email: z
      .string()
      .min(1, '이메일을 입력해주세요.')
      .regex(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        '이메일 형식을 확인해주세요.',
      ),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상 20자 이하로 입력해주세요.' })
      .max(20, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        '비밀번호는 영문 + 숫자 + 특수문자 조합으로 설정해주세요.',
      ),
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export const userInfoSchema = z.object({
  name: z
    .string()
    .min(2, '이름을 입력해주세요.')
    .regex(/^[a-zA-Z가-힣]*$/, '이름은 한글과 영어로만 입력 가능합니다.'),
  phone: z
    .string()
    .min(2, '휴대폰번호를 입력해주세요.')
    .regex(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      '휴대폰번호는 숫자만 입력 가능합니다.',
    ),
  nickname: z
    .string()
    .min(2, {
      message: '닉네임은 한글/영문/숫자 혼합해서 2~8자로 설정해주세요.',
    })
    .max(8, '닉네임은 한글/영문/숫자 혼합해서 2~8자로 설정해주세요.')
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '닉네임은 한글, 영문, 숫자만 입력 가능합니다.',
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, '이메일을 입력해주세요.')
    .regex(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      '이메일 형식을 확인해주세요.',
    ),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
});

//export type Checkbox = z.infer<typeof checkBoxSchema>;

export const checkBoxSchema = (isCatch: boolean) =>
  z.object({
    check1: z.boolean().refine((val) => val === true, {
      message: '필수 선택 요소입니다.',
    }),
    check2: z.boolean().refine((val) => val === true, {
      message: '필수 선택 요소입니다.',
    }),
    ...(isCatch
      ? {
          check3: z.boolean().refine((val) => val === true, {
            message: '필수 선택 요소입니다.',
          }),
        }
      : {}),
  });
