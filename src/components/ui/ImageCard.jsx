import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ImageCard = ({ img, content }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/pisos')}
      className="flex flex-col min-h-48 justify-center itesm-center p-6 shadow-lg rounded-xl cursor-pointer"
    >
      <Image src={img} height={100} width={100} className="rounded-t-xl" />
      <div className="mt-6 text-secondary text-xl text-center">{content}</div>
    </div>
  );
};

ImageCard.displayName = 'ImageCard';

export default ImageCard;
