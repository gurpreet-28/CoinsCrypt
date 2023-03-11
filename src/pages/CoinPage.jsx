import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfoChart from "../components/CoinInfoChart";
import { SingleCoin } from "../config/api";
import "./CoinPage.css";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState("");

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="coin-page">
        <div className="coin-head">
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
          <p>{coin?.description?.en.split(". ")[0]}.</p>
        </div>
        <CoinInfoChart id={id} />
      </div>
    </>
  );
}

export default CoinPage;
