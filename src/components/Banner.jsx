import React from "react";
import crypto from "./crypto.png";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={crypto}
            alt=""
            width="72"
          />
          <h1 className="display-5 fw-bold main-head">CoinsCrypt</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              CoinsCrypt is designed to help users track the price and
              performance of various cryptocurrencies in real-time. It provide
              users with the ability to monitor their cryptocurrency
              investments, view price charts and graphs, set alerts for price
              changes, and receive news and updates on the cryptocurrency
              market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
