import React from "react";
import Information from '../Information/Information';
import heroimg from './heroimg.png';

// Styles
import "./Hero.scss";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img src={heroimg} alt="boy playing with wood toy on the floor" className="hero__img"></img>
        <h1 className="hero__text">Juguetes de madera <span>Hechos a mano 100%</span></h1>
      </div>
      <Information />
    </div>
  );
};

export default Hero;
