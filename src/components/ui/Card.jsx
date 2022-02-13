import Image from 'next/image';
import React from 'react';

const Card = ({ imgSrc, title, text, className }) => {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <Image
        src={imgSrc}
        alt="Imagen de acompañamiento para tarjeta"
        width={200}
        height={200}
      />
      <span className="font-bold text-2xl mt-4 mb-2 text-center">{title}</span>
      <span className="text-l mt-4 mb-2 text-center">{text}</span>
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
