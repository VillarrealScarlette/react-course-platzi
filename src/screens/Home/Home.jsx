import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Media.scss";
import "./Home.scss";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import CarouselItem from "../../components/Carousel/CarouselItem";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";

const Home = ({ myList, trends, originals }) => {
  const data = {
    myList,
    trends,
    originals,
  };
  const categories = Object.keys(data);

  return (
    <>
      <Header />
      <Search isHome />
      {categories.map(
        (category, index) =>
          data[category].length > 0 && (
            <Categories
              key={index}
              title={
                category == "trends"
                  ? "Tendencias"
                  : category == "originals"
                  ? "Originales de Platzi Video"
                  : category == "myList"
                  ? "Mi Lista"
                  : null
              }
            >
              <Carousel>
                {data[category].map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList={category == "myList" ? true : false}
                  />
                ))}
              </Carousel>
            </Categories>
          )
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

Home.propTypes = {
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};

export default connect(mapStateToProps, null)(Home);
