import React from "react";
import logo from "../../Assets/background.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1>GILLY'S</h1>
        <p>Koramangala</p>
      </div>
      <div className="right">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
