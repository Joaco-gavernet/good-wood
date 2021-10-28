import React from "react";
import "./Nav.scss";
import logo from './logo.png'

const titles = [
  'Inicio',
  'Sobre nosotros',
  'Productos',
  'Contacto'
];

const Nav = () => {

  return (
    <nav className="nav">
      <img src={logo} alt="GoodWood logo"></img>
      <ul className="nav__list">
        {titles.map(title =>
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
