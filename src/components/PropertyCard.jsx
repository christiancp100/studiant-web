import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Cube from './icons/Cube';
import UserGroup from './icons/UserGroup';

const PropertyBadge = ({ Icon, text }) => (
  <span className="flex">
    <Icon className="mr-2" />
    {text}
  </span>
);

const PropertyCard = ({ property, id }) => {
  const router = useRouter();
  const img = property.photos?.data[0]?.attributes?.formats?.medium?.url;
  const { title, location, availableRoommates, surface, price } = property;

  return (
    <div
      onClick={() => router.push(`/pisos/${id}`)}
      className="flex flex-col justify-between shadow-lg rounded-xl cursor-pointer h-96"
    >
      <div className="relative w-full h-64">
        {img && <Image
          src={img}
          layout="fill"
          className="rounded-t-xl"
          objectFit="cover"
        />}
      </div>
      <div className="mt-2 mb-6 mx-4">
        <span className="font-bold text-lg">{title}</span>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-light text-md">{location}</span>
            <PropertyBadge text={availableRoommates} Icon={UserGroup} />
            <PropertyBadge
              text={
                <span className="ml-2">
                  {surface} m<sup>2</sup>
                </span>
              }
              Icon={Cube}
            />
          </div>
          <span className="self-end text-secondary font-bold text-2xl">
            {price}€
          </span>
        </div>
      </div>
    </div>
  );
};

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;
