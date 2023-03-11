import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";
import "./Carousel.css";

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrending(data.coins);
  };

  // console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="trending-head">Trending Coins</div>
      <div className="container text-center">
        <div className="row">
          {trending.map((coin) => {
            let price = coin.item.price_btc * 21756.5;
            return (
              <Link className="col my-2 mx-2 p-2" to={`/coins/${coin.item.id}`}>
                <img src={coin.item.small} alt="coin-img" />
                <div className="card-body">
                  <h5 className="card-title">{coin.item.name}</h5>
                  <p className="card-text">$ {price.toFixed(4)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
