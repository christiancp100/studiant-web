import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Menu from './Menu';
import Button from './ui/Button';
import RightArrow from './icons/RightArrow';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div>
      <Menu />

      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
        <div className="flex flex-col lg:w-1/2 lg:text-left text-center">
          <h1 className="lg:text-3xl text-2xl font-black mb-5">
            Una Inmobiliaria a disposición de los Estudiantes
          </h1>
          <h2 className="lg:w-4/5 leading-relaxed font-bold mb-6">
            Nuestro modelo de negocio se basa en la creación de una comunidad
            grande de estudiantes para así poder mejorar las condiciones de los
            alquileres de estudiantes, así como los servicios ofertados y los
            precios.
          </h2>
          <Button
            onClick={() => router.push('/pisos')}
            className="bg-primary lg:self-start justify-center"
            Icon={RightArrow}
          >
            Ver pisos
          </Button>
        </div>
        <Image
          src="/img/hero.svg"
          alt="Ilustración que muestra varios edificios"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
