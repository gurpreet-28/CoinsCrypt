import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import Spinner from "../components/Spinner";
import { SingleCoin } from "../config/api";
import "./CoinPage.css";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCoin = async () => {
    setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setLoading(false);
    setCoin(data);
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
          <div className="coin-head">
            <h1>{coin.name}</h1>
            <p>
              {coin.name} live price in US Dollars. View Statistics, Market cap
              and Supply
            </p>
          </div>
          <CoinInfoChart id={id} coin={coin} />
        </div>
      )}
    </>
  );
}

export default CoinPage;
