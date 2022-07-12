import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Mesto" className="header__logo" />
    </header>
  );
}

export default Header;
