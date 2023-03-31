import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ bestCoins, newestCoins }) => {
  return (
    <div className="carousel-section">
      <div className="best carousel">
        <div className="carousel-head">
          <h3>Trending Coins</h3>
        </div>
        <div className="container">
          <div className="row">
            {bestCoins.map((coin) => {
              return (
                <div className="col coin-div" key={coin.uuid}>
                  <Link to={`/coin/${coin.uuid}`}>
                    <div className="carousel-card my-2">
                      <img
                        src={coin.iconUrl}
                        alt="coin-img"
                        className="coin-img"
                      />
                      <div className="carousel-card-body">
                        <p>{coin.symbol}</p>
                        <h5 className="carousel-card-title">{coin.name}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="new carousel mt-5">
        <div className="carousel-head">
          <h3>Newest Coins</h3>
        </div>
        <div className="container text-center">
          <div className="row">
            {newestCoins.map((coin) => {
              return (
                <Link
                  className="col coin-div"
                  to={`/coin/${coin.uuid}`}
                  key={coin.uuid}
                >
                  <div className="carousel-card my-2">
                    <img
                      src={coin.iconUrl}
                      alt="coin-img"
                      className="coin-img"
                    />
                    <div className="carousel-card-body">
                      <p>{coin.symbol}</p>
                      <h5 className="carousel-card-title">{coin.name}</h5>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
