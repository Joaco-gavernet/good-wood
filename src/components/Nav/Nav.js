import React from "react";
import "./Nav.scss";

const titles = [
  'Inicio',
  'Sobre Nosotros',
  'Productos',
  'Preguntas Frecuentes',
  'Contacto'
];

const Nav = () => {

  return (
    <nav className="nav">
    <ul className="nav__list">
      {titles.map( title => 
        <li key={title} className="nav__item">
            <a className="nav__link" href="##">{title}</a>
        </li>
        )
      }
    </ul>
  </nav>
  );
};

export default Nav;
