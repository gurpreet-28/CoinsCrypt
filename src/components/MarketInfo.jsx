import React from "react";

const MarketInfo = (props) => {
  const { coin } = props;
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
      <div className="row coin-info">
        <div className="col col-md-6 col-sm-12">
          <h2>{coin.name} USD Value Statistics</h2>
          <p>
            An overview showing the statistics of Binance USD, such as the base
            and quote currency, the rank, and trading volume.
          </p>
          <table className="table table-hover info-table">
            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-dollar-sign"></i> Price to USD
                </td>
                <td className="right">
                  ${convertToInternationalCurrencySystem(coin.price)}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-hashtag"></i> Rank
                </td>
                <td className="right">{coin.rank}</td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-bolt-lightning"></i> 24h Volume
                </td>
                <td className="right">
                  ${convertToInternationalCurrencySystem(coin["24hVolume"])}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-dollar-sign"></i> Market Cap
                </td>
                <td className="right">
                  ${convertToInternationalCurrencySystem(coin.marketCap)}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-trophy"></i> All-time-high(daily
                  avg.)
                </td>
                <td className="right">
                  $
                  {convertToInternationalCurrencySystem(
                    coin?.allTimeHigh?.price
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col  col-md-6 col-sm-12">
          <h2>Other Stats Info</h2>
          <p>
            An overview showing the statistics of Binance USD, such as the base
            and quote currency, the rank, and trading volume.
          </p>
          <table className="table table-hover info-table">
            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-chart-line"></i> Number Of Markets
                </td>
                <td className="right">
                  {numberWithCommas(coin.numberOfMarkets)}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-coins"></i> Number Of Exchanges
                </td>
                <td className="right">
                  {numberWithCommas(coin.numberOfExchanges)}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-circle-exclamation"></i> Aprroved
                  Supply
                </td>
                <td className="right">
                  {coin?.supply?.confirmed ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className="fa-solid fa-x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-circle-exclamation"></i> Total
                  Supply
                </td>
                <td className="right">
                  ${convertToInternationalCurrencySystem(coin?.supply?.total)}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-circle-exclamation"></i> Circulating
                  Supply
                </td>
                <td className="right">
                  $
                  {convertToInternationalCurrencySystem(
                    coin?.supply?.circulating
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MarketInfo;
