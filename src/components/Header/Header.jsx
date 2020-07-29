import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
//Import imgs
import logo from "../../assets/logo-platzi-video-BW2.png";
import userIcon from "../../assets/user-icon.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
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
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
