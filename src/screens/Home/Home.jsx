import React from "react";
import { connect } from "react-redux";
import "./Media.scss";
import "./Home.scss";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import CarouselItem from "../../components/Carousel/CarouselItem";
import Carousel from "../../components/Carousel/Carousel";
//Import hooks
import useInitialState from "../../hooks/useInitialState";
//API
const API = "http://localhost:3000/initialState";

const Home = ({ myList, trends, originals }) => {
  const data = {
    myList,
    trends,
    originals,
  };
  const categories = Object.keys(data);
  return (
    <>
      <Search />
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
                  : title
              }
            >
              <Carousel>
                {data[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
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
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
