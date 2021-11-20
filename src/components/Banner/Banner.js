import React from "react";
import bannerLogo from './banner-logo.png';
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner" id='banner'>
      <img src={bannerLogo} alt="GoodWood logo banner big"></img>
    </div>
  );
};

export default Banner;
