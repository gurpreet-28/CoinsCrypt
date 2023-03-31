import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import Spinner from "../components/Spinner";
import { SingleCoin } from "../config/api";
import "./CoinPage.css";
import MarketInfo from "../components/MarketInfo";
import CoinLinks from "../components/CoinLinks";

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
