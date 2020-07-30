import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, removeFavorite } from "../../actions";
import "./Carousel.scss";
//imgs
import playIcon from "../../assets/play-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import removeIcon from "../../assets/remove-icon.png";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleRemoveFavorite = (itemId) => {
    props.removeFavorite(itemId);
  };

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
          {isList ? (
            <img
              className="carousel-item__details--img"
              alt="Remove Icon"
              src={removeIcon}
              onClick={() => handleRemoveFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              alt="Plus Icon"
              src={plusIcon}
              onClick={handleSetFavorite}
            />
          )}
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
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
