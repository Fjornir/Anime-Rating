import React from "react";
import logo from '../imgs/logo.png'

function Header() {
  return <header className="header">
  <img className="header__logo" src={logo} alt="" />
  </header>;
}

export default Header;
