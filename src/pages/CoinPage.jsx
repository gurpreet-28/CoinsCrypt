import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import Spinner from "../components/Spinner";
import { SingleCoin } from "../config/api";
import "./CoinPage.css";

const CoinPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const { uuid } = useParams();
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const fetchCoin = async () => {
    setLoading(true);
    const options = {
      headers: {
        "x-access-token": apiKey,
      },
    };
    const { data } = await axios.get(SingleCoin(uuid), options);
    setLoading(false);
    setCoin(data.data.coin);
    setLinks(data.data.coin.links);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue)).toFixed(2);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="coin-page">
          <div className="coin-head">
            <h1>{coin.name}</h1>
            <p>
              {coin.name} live price in US Dollars. View Statistics, Market cap
              and Supply
            </p>
          </div>
          <CoinInfoChart uuid={uuid} coin={coin} />
          <div className="row row-cols-lg-2 row-cols-sm-1 coin-info">
            <div className="col">
              <h2>{coin.name} USD Value Statistics</h2>
              <p>
                An overview showing the statistics of Binance USD, such as the
                base and quote currency, the rank, and trading volume.
              </p>
              <table className="table table-hover info-table">
                <tbody>
                  <tr>
                    <td>
                      <i class="fa-solid fa-dollar-sign"></i> Price to USD
                    </td>
                    <td className="right">
                      $ {convertToInternationalCurrencySystem(coin.price)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-hashtag"></i> Rank
                    </td>
                    <td className="right">{coin.rank}</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-bolt-lightning"></i> 24h Volume
                    </td>
                    <td className="right">
                      ${" "}
                      {convertToInternationalCurrencySystem(coin["24hVolume"])}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-dollar-sign"></i> Market Cap
                    </td>
                    <td className="right">
                      $ {convertToInternationalCurrencySystem(coin.marketCap)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-trophy"></i> All-time-high(daily
                      avg.)
                    </td>
                    <td className="right">
                      ${" "}
                      {convertToInternationalCurrencySystem(
                        coin?.allTimeHigh?.price
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
              <h2>Other Stats Info</h2>
              <p>
                An overview showing the statistics of Binance USD, such as the
                base and quote currency, the rank, and trading volume.
              </p>
              <table className="table table-hover info-table">
                <tbody>
                  <tr>
                    <td>
                      <i class="fa-solid fa-chart-line"></i> Number Of Markets
                    </td>
                    <td className="right">
                      {numberWithCommas(coin.numberOfMarkets)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-coins"></i> Number Of Exchanges
                    </td>
                    <td className="right">
                      {numberWithCommas(coin.numberOfExchanges)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-circle-exclamation"></i> Aprroved
                      Supply
                    </td>
                    <td className="right">
                      {coin?.supply?.confirmed ? (
                        <i class="fa-solid fa-check"></i>
                      ) : (
                        <i class="fa-solid fa-x"></i>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-circle-exclamation"></i> Total
                      Supply
                    </td>
                    <td className="right">
                      ${" "}
                      {convertToInternationalCurrencySystem(
                        coin?.supply?.total
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa-solid fa-circle-exclamation"></i> Circulating
                      Supply
                    </td>
                    <td className="right">
                      ${" "}
                      {convertToInternationalCurrencySystem(
                        coin?.supply?.circulating
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="links">
            <div>
              <h2>{coin.name} links</h2>
            </div>
            <table className="table table-hover">
              <tbody>
                {links.map((link) => {
                  return (
                    <tr>
                      <th>
                        {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                      </th>
                      <td className="right">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.name}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinPage;
