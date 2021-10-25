import React from "react";
import "./Banner.scss";
import bannerLogo from './banner-logo.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerLogo} alt="GoodWood logo banner big"></img>
    </div>
  );
};

export default Banner;
