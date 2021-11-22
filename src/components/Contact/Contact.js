import React from "react";
import "./Contact.scss";

import arrow from './arrow-top.png';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <p className="contact__text">Juguetes responsables con el medio
        ambiente, de formas reconocibles, fáciles de manipular y trasladar.</p>
      <a href="##" className="contact__button">¡Contactanos!</a>
      <a href="#banner">
        <img src={arrow} alt='Back to Top' className='contact__img' />
      </a>
    </div>
  );
};

export default Contact;
