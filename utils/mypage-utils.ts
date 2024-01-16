export const maskEmail = (email: string): string => {
  const atIndex = email.indexOf('@');

  if (atIndex !== -1) {
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex);

    const maskedUsername =
      username.substring(0, 3) + username.substring(3).replace(/./g, '*');

    const maskedEmail = maskedUsername + domain;

    return maskedEmail;
  } else {
    // @ 기호가 없는 이메일의 경우 원래 이메일을 반환합니다.
    return email;
  }
};

export const maskPassword = (password: string) => {
  const maskedPassword = '*'.repeat(password.length);
  return maskedPassword;
};

export const maskPhoneNumber = (phoneNumber: string) => {
  const maskedPhoneNumber =
    phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7);
  return maskedPhoneNumber;
};

export const noMask = (value: string) => {
  return value;
};
