import React from "react";
import './Search.scss'

const Search = () => {
  const main_title_text = "¿Qué quieres ver hoy?";
  const main_input_placeholder = "Buscar...";
  return (
    <section className="main">
      <h2 className="main__title">{main_title_text}</h2>
      <input
        type="text"
        className="input"
        placeholder={main_input_placeholder}
      ></input>
    </section>
  );
};

export default Search;
