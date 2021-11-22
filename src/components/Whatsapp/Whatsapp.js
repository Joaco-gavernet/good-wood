import React from "react";
import "./Whatsapp.scss";
import wapp from './wapp.svg';

const Whatsapp = () => {
  return (
    <a className="whatsapp" href="https://api.whatsapp.com/send?phone=5492215343580&text=Hola%20Goodwood.%20Quer%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos!" rel="noopener" target="_blank">
      <img src={wapp} alt="whatsapp icon"></img>
    </a>
  );
};

export default Whatsapp;
