import React from "react";
import classNames from "classnames";
import "./Search.scss";

const Search = ({ isHome }) => {
  const main_title_text = "¿Qué quieres ver hoy?";
  const main_input_placeholder = "Buscar...";
  const inputStyle = classNames("input", {
    isHome,
  });
  return (
    <section className="main">
      <h2 className="main__title">{main_title_text}</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder={main_input_placeholder}
      ></input>
    </section>
  );
};

export default Search;
