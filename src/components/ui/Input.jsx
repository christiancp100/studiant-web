import React from 'react';

const Input = ({ className, ...rest }) => {
  return <input className={`rounded-lg px-4 py-2 lg:py-2 shadow-md border border-primary ${className}`} {...rest} />;
};

export default Input;
