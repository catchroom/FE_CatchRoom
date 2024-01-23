import React from 'react';

const LoadingText = ({
  condition,
  viewText,
  loadingText,
  delayMs = 1000,
  textSize = 't3',
}: {
  condition: boolean;
  viewText: string | number;
  loadingText: string | number;
  delayMs?: number;
  textSize?: string;
}) => {
  const commonStyle = `text-${textSize}`;
  const ViewTextComponent = () => {
    return <p className={`${commonStyle}`}>{viewText}</p>;
  };
  const LoadingTextComponent = () => {
    return (
      <p className={`${commonStyle} animate-pulse delay-[${delayMs}ms]`}>
        {loadingText}
      </p>
    );
  };
  return <>{condition ? <ViewTextComponent /> : <LoadingTextComponent />}</>;
};

export default LoadingText;
