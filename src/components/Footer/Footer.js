import React from "react";
import "./Footer.scss";
import logo from './logo.png'
import fb from './fb.svg'
import ig from './ig.svg'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <img src={logo} alt="GoodWood logo"></img>
        </li>

        <li className="footer__item">
          <span className="footer__title">
            Contactanos
          </span>
          <ul className="footer__item--list">
            <li>+549 2215343580</li>
            <li>disenogoodwood@gmail.com</li>
            <li><strong>Showroom</strong></li>
            <li>Calle 23 nro 1574 1/2 Taller Dinamita</li>
            <li>La Plata, Bs.As. Arg.</li>
          </ul>
        </li>

        <li className="footer__item">
          <span className="footer__title">
            Redes Sociales
          </span>
          <div className="footer__item--social">
            <a href="https://www.facebook.com/goodwood.di/" target="_blank"><img src={fb} alt="Facebook Logo"></img></a>
            <a href="https://www.instagram.com/good_wood_di/" target="_blank"><img src={ig} alt="Instagram Logo"></img></a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
