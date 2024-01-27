import React from 'react';
import { INFO_MESSAGES } from '@/constants/order';
import InfoCircle from '@/public/svgComponent/infoCircle';

type InfoBoxProps = {
  messageKey: keyof typeof INFO_MESSAGES;
};

const InfoBox = ({ messageKey }: InfoBoxProps) => {
  const messages = INFO_MESSAGES[messageKey];
  return (
    <div className="flex flex-col gap-2 px-4 py-3 bg-surface-secondary rounded">
      <div className="flex items-start gap-2">
        <InfoCircle color="#717680" />
        <p className="text-gray-700 text-p2">{messages[0]}</p>
      </div>
      {messages.slice(1).map((message, index) => (
        <p key={index} className="text-text-sub text-p2">
          {message}
        </p>
      ))}
    </div>
  );
};
export default InfoBox;
