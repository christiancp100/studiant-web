import Link from 'next/link';
import React from 'react';

const MenuElement = ({ children, href }) => (
  <li className={`inline mx-8 hover:text-secondary`}>
    <Link href={href}>{children}</Link>
  </li>
);

const Menu = (props) => {
  return (
    <div className="flex justify-between lg:mb-0 mb-12 items-end">
      <Link href="/">
        <a className="font-brand font-bold text-4xl">Studiant.es</a>
      </Link>
      <ul className="lg:block hidden" {...props}>
        <MenuElement href="/">Inicio</MenuElement>
        <MenuElement href="/pisos">Pisos</MenuElement>
        <MenuElement href="/contact">Contáctanos</MenuElement>
      </ul>
    </div>
  );
};

Menu.displayName = 'Menu';

export default Menu;
