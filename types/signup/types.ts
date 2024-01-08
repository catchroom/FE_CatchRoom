type SignUpData = {
  AuthData: {
    email: string;
    password: string;
    passwordCheck: string;
  };
  UserInfo: {
    name: string;
    phone: string;
    nickname: string;
  };
};

export type AuthData = SignUpData['AuthData'];
export type UserInfo = SignUpData['UserInfo'];
