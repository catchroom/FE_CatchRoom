// import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import Image from 'next/image';
import loginImage from '../../../public/google_login_2xn.png';

interface MyCustomButtonProps {
  onClick: () => void;
}

const MyCustomButton = ({ onClick }: MyCustomButtonProps) => {
  return (
    <div onClick={onClick}>
      <Image src={loginImage} width={210} alt="로그인" />
    </div>
  );
};

export default MyCustomButton;
