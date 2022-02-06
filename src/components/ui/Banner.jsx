import React from 'react';

const Banner = ({ title, subtitle, className, ...rest }) => {
  return <div {...rest} className={`flex justify-center flex-col items-center text-center ${className}`}>
    <span className="block font-bold text-3xl mb-8">{title}</span>
    <span className="lg:w-3/4 text-center leading-relaxed">{subtitle}</span>
  </div>;
};

export default Banner;
