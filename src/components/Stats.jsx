import React from "react";
import "./Stats.css";

const Stats = ({ stats }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + " B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + " M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + " K"
      : Math.abs(Number(labelValue)).toFixed(2);
  }

  return (
    <>
      <div className="stats">
        <div className="stats-head">
          {" "}
          <h2>Crypto Market Statistics</h2>
        </div>
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <h5>Total Cryptocurrencies:</h5>
              <p>{numberWithCommas(stats.totalCoins)}</p>
            </div>
            <div className="col">
              <h5>Total Markets:</h5>
              <p>{numberWithCommas(stats.totalMarkets)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Total Exchanges:</h5>
              <p>{stats.totalExchanges}</p>
            </div>
            <div className="col">
              <h5>Total MarketCap:</h5>
              <p>
                ${convertToInternationalCurrencySystem(stats.totalMarketCap)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Total 24H Volume:</h5>
              <p>
                ${convertToInternationalCurrencySystem(stats.total24hVolume)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
