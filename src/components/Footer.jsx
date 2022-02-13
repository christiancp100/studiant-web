import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary flex md:flex-row flex-col  md:justify-around md:h-48 pb-6 w-full px-4 lg:pt-0 pt-4">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <span className="text-default font-bold text-xl">Síguenos en</span>
        <a target="_blank" className="text-default" href="#">
          Instagram
        </a>
        <a target="_blank" className="text-default" href="#">
          Twitter
        </a>
      </div>
      <div className="flex flex-col md:justify-end justify-center  order-0">
        <Link href="/">
          <span className="text-default font-brand cursor-pointer text-center md:mt-0 mt-2 font-xl">
            Studiant.<span className="text-default font-sans">© 2022</span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center md:mt-0 mt-2 md:items-end font-light">
        <Link href="/politica-cookies">
          <span className="text-default cursor-pointer">
            Política de Cookies
          </span>
        </Link>
        <Link href="/aviso-legal">
          <span className="text-default cursor-pointer">Aviso legal</span>
        </Link>
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
