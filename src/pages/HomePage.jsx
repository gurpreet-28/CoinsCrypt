import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Banner />
      <Carousel />
    </div>
  );
}

export default HomePage;
