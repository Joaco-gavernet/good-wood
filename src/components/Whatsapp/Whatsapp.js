import React from "react";
import "./Whatsapp.scss";
import wapp from './wapp.svg';

const Whatsapp = () => {
  return (
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=5492215343580&text=Hola" rel="noopener" target="_blank">
      <img src={wapp} alt="whatsapp icon"></img>
    </a>
  );
};

export default Whatsapp;
