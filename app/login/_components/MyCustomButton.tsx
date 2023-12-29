// import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

interface MyCustomButtonProps {
  onClick: () => void;
}

const MyCustomButton = ({ onClick }: MyCustomButtonProps) => {
  return <button onClick={onClick}>구글 로그인 커스텀</button>;
};

export default MyCustomButton;
