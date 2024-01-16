import React from 'react';

const FormError = ({ message }: { message: string }) => {
  return <p className="text-text-critical text-p2">{message}</p>;
};

export default FormError;
