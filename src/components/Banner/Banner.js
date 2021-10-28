import React from "react";
import bannerLogo from './banner-logo.png';


// Styles
import "./Banner.scss";


const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerLogo} alt="GoodWood logo banner big"></img>
    </div>
  );
};

export default Banner;
