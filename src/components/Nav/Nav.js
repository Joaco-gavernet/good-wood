import React from "react";
import "./Nav.scss";
import logo from './logo.png'


const titles = [
  {
    title: 'Inicio',
    id: 'banner'
  },
  {
    title: 'Sobre nosotros',
    id: 'about'
  },
  {
    title: 'Productos',
    id: 'products'
  },
  {
    title: 'Preguntas Frecuentes',
    id: 'questions'
  },
  {
    title: 'Contacto',
    id: 'contact'
  }
]


const Nav = () => {


  return (
    <nav className="nav">
      <img src={logo} alt="GoodWood logo"></img>
      <ul className="nav__list">
        {titles.map((instance, key) =>
          <li key={key} className="nav__item">
            <a className="nav__link" href={'#' + instance.id}>{instance.title}</a>
          </li>
        )
        }
      </ul>
    </nav>
  );
};

export default Nav;
