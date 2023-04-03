import React, { useContext } from "react";
import "./Stats.css";
import NumbersContext from "../context/NumbersContext";

const Stats = ({ stats }) => {
  const context = useContext(NumbersContext);
  const { numberWithCommas, convertToInternationalCurrencySystem } = context;

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
