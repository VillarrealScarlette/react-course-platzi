import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <div className="not-found__container">
      <div className="not-found__container--title">
        <h1>404</h1>
        <h2>UH OH! Estas perdido.</h2>
        <p>
          La página que estas buscando no existe. Cómo llegaste aquí es un misterio. Pero puedes dar click al botón a continuación para volver al Inicio.
        </p>
        <Link to="/">
          <button className="not-found__button green">INICIO</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
