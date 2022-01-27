import Link from 'next/link';
import React from 'react';

const MenuElement = ({ children, href }) => (
  <li className={`inline mx-8 hover:text-secondary`}><Link href={href}>{children}</Link></li>

)

const Menu = (props) => {
  return <ul {...props}>
    <MenuElement href="/">Inicio</MenuElement>
    <MenuElement href="/pisos">Pisos</MenuElement>
    <MenuElement href="/contact">Contáctanos</MenuElement>
  </ul>;
};

export default Menu;
