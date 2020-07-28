import React from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
//Import imgs
import playIcon from "../../assets/play-icon.png";
import plusIcon from "../../assets/plus-icon.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            alt="Play Icon"
            src={playIcon}
          />
          <img
            className="carousel-item__details--img"
            alt="Plus Icon"
            src={plusIcon}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
   cover: PropTypes.string,
   title: PropTypes.string,
   year: PropTypes.number,
   contentRating: PropTypes.string,
   duration: PropTypes.number,
}

export default CarouselItem;
