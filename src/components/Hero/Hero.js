import React from "react";
import "./Hero.scss";
import heroimg from './heroimg.png';


const Hero = () => {
  return (
    <div className="hero">
      <div>
          <img src={heroimg} alt="boy playing with wood toy on the floor"></img>
      </div>
    </div>
  );
};

export default Hero;
