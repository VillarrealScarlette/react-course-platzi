import React from "react";

import "./Media.scss";
import "./App.scss";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import CarouselItem from "../components/Carousel/CarouselItem";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
//Import hooks
import useInitialState from "../hooks/useInitialState";
//API
const API = "http://localhost:3000/initialState";

const App = () => {
  const [videos, categories] = useInitialState(API);
  const title = "Mi lista";
  return (
    <div className="App">
      <Header />
      <Search />
      {categories.map(
        (category, index) =>
          videos[category].length > 0 && (
            <Categories key={index} title={(category == "trends") ? "Tendencias" : (category == "originals") ? "Originales de Platzi Video" : title}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
      )}
      <Footer />
    </div>
  );
};

export default App;
