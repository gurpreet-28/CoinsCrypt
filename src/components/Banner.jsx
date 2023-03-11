import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
            width="72"
            height="57"
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
