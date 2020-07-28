import React from "react";
import "./Header.scss";
//Import imgs
import logo from "../../assets/logo-platzi-video-BW2.png";
import userIcon from "../../assets/user-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Platzi Video"
      />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="Imagen Perfil" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
