import { z } from 'zod';

export const nameSchema = z.object({
  nickname: z
    .string()
    .min(2, {
      message:
        '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    })
    .max(
      8,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    )
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    ),
});

export const nicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, {
      message:
        '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    })
    .max(
      8,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    )
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    ),
});

export const accountSchema = z.object({
  account: z
    .string()
    .min(1, '계좌번호를 입력해주세요.')
    .regex(/^[0-9]*$/, '계좌번호는 숫자만 입력 가능합니다.'),
  name: z
    .string()
    .min(2, '이름은 한글과 영어로만 입력 가능합니다.')
    .regex(/^[a-zA-Z가-힣]*$/, '이름은 한글과 영어로만 입력 가능합니다.'),
  bank: z.string({
    required_error: '은행을 선택해주세요.',
  }),
});

export const withdrawSchema = (originalBalance: number) =>
  z.object({
    balance: z
      .string()
      .regex(/^[0-9]*$/, '출금액은 숫자만 입력 가능합니다.')
      .refine((value) => Number(value) < originalBalance, {
        message: '출금 가능 금액 초과',
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
      .min(8, {
        message: '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.',
      })
      .max(20, '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.',
      ),
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '동일한 비밀번호를 입력해주세요.',
    path: ['passwordCheck'],
  });

export const authDataSchema = z
  .object({
    email: z
      .string()
      .min(1, '올바르지 않은 이메일 형식입니다 이메일을 다시 확인해주세요.')
      .regex(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        '올바르지 않은 이메일 형식입니다 이메일을 다시 확인해주세요.',
      ),
    password: z
      .string()
      .min(8, {
        message: '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.',
      })
      .max(20, '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        '영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.',
      ),
    passwordCheck: z.string(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '동일한 비밀번호를 입력해주세요.',
    path: ['passwordCheck'],
  });

export const userInfoSchema = z.object({
  name: z
    .string()
    .min(2, '올바르지 않은 이름 형식입니다.')
    .regex(/^[a-zA-Z가-힣]*$/, '올바르지 않은 이름 형식입니다.'),
  phone: z
    .string()
    .min(2, '유효하지 않은 휴대폰번호는 형식입니다.')
    .regex(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      '유효하지 않은 휴대폰번호는 형식입니다.',
    ),
  nickname: z
    .string()
    .min(2, {
      message:
        '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    })
    .max(
      8,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    )
    .regex(
      /^[a-zA-Z0-9가-힣]*$/,
      '공백을 제외한 한글 + 영문 + 숫자만 2~8자리 조합으로 설정 해주세요.',
    ),
});

export const loginSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요.'),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
});

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

export const radioSchema = z.object({
  selectedProduct: z.string().min(1, '하나의 상품을 선택해야 합니다.'),
});

export type FromSeller = z.infer<typeof sellerSchema>;

export const sellerSchema = z.object({
  sellerContent: z
    .string()
    .min(10, '최소 10자 이상 입력해주세요')
    .max(100, '리뷰는 100자 이하로 입력해주세요.'),
});

export const guestInfoSchema = z.object({
  name: z
    .string()
    .nonempty('이름을 입력해주세요.')
    .regex(/^[a-zA-Z가-힣]*$/, '이름은 한글과 영어로만 입력 가능합니다.'),
  phone: z
    .string()
    .nonempty('휴대폰번호를 입력해주세요.')
    .regex(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      '휴대폰번호는 숫자만 입력 가능합니다.',
    ),
});
