import React from 'react';
import { INFO_MESSAGES } from '@/constants/order';
import InfoIcon from '@/public/svg/info-circle.svg';

type InfoBoxProps = {
  messageKey: keyof typeof INFO_MESSAGES;
};

const InfoBox = ({ messageKey }: InfoBoxProps) => {
  const messages = INFO_MESSAGES[messageKey];
  return (
    <div className="flex flex-col gap-2 px-4 py-3 bg-gray-200 rounded">
      <div className="flex items-start gap-2">
        <InfoIcon />
        <p className="text-gray-700 text-p2">{messages[0]}</p>
      </div>
      {messages.slice(1).map((message, index) => (
        <p key={index} className="text-gray-700 text-p2">
          {message}
        </p>
      ))}
    </div>
  );
};
export default InfoBox;
