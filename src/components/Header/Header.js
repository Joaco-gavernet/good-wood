import React from "react";
import "./Header.scss";
import logo from './logo.png';
import Nav from '../Nav/Nav.js';

const Header = () => {
  return (
    <header className="header">
      <div>
          <img src={logo} alt="GoodWood logo"></img>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
