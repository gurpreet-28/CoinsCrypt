import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner pt-5 pb-4">
        <div className="px-4 py-5 mb-3 text-center">
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
