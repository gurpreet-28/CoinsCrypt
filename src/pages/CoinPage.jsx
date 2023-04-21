import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import Spinner from "../components/Spinner";
import "./CoinPage.css";
import MarketInfo from "../components/MarketInfo";
import CoinLinks from "../components/CoinLinks";

const CoinPage = () => {
  const { uuid } = useParams();
  const [coin, setCoin] = useState(0);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const fetchCoin = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Key": "27d95d49fcmshe45a3ec39ce438ap1e9abbjsn137363eadc59",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    const { data } = await axios.request(options);
    setLoading(false);
    setCoin(data.data.coin);
    setLinks(data.data.coin.links);
  };

  useEffect(() => {
    fetchCoin();
    if (coin.name === undefined) {
      document.title = `Coin - CoinsCrypt`;
    } else {
      document.title = `${coin?.name} - CoinsCrypt`;
    }
    // eslint-disable-next-line
  }, [coin.name]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="coin-page">
          <CoinInfoChart uuid={uuid} coin={coin} />
          <MarketInfo coin={coin} />
          <CoinLinks coin={coin} links={links} />
        </div>
      )}
    </>
  );
};

export default CoinPage;
