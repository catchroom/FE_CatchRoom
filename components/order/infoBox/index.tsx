import React from 'react';
import { INFO_MESSAGES } from '@/constants/order';
import InfoIcon from '@/public/svg/info-circle.svg';

type InfoBoxProps = {
  messageKey: keyof typeof INFO_MESSAGES;
};

const InfoBox = ({ messageKey }: InfoBoxProps) => {
  const messages = INFO_MESSAGES[messageKey];
  return (
    <div className=" flex gap-2 items-center justify-center  px-4 py-3 bg-gray-200 p-4 rounded">
      <InfoIcon />
      {messages.map((message) => (
        <p key={messageKey} className=" text-gray-700 text-p2">
          {message}
        </p>
      ))}
    </div>
  );
};
export default InfoBox;
