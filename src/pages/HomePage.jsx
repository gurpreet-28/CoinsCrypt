import React, { useState } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Spinner from "../components/Spinner";
import "./HomePage.css";

function HomePage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="home">
          <Banner />
          <Carousel setLoading={setLoading} />
        </div>
      )}
    </>
  );
}

export default HomePage;
