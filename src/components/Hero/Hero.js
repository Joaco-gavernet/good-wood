import React from "react";
import Information from '../Information/Information';
import video from './video.mp4';
import "./Hero.scss";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <video className="hero__video" autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </video>
        <h1 className="hero__text">Juguetes de madera <span>Hechos a mano 100%</span></h1>
      </div>
      <Information />
    </div>
  );
};

export default Hero;
