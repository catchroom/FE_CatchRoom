import React from 'react';

const FormError = ({ message }: { message: string }) => {
  return (
    <p className="absolute bottom-0 translate-y-full text-text-critical text-p2">
      {message}
    </p>
  );
};

export default FormError;
