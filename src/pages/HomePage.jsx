import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Spinner from "../components/Spinner";
import Stats from "../components/Stats";
import { GetStats } from "../config/api";
import axios from "axios";
import "./HomePage.css";

function HomePage() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [bestCoins, setBestCoins] = useState([]);
  const [newestCoins, setNewestCoins] = useState([]);

  const fetchStats = async () => {
    setLoading(true);
    const options = {
      headers: {
        "x-access-token": apiKey,
      },
    };
    const { data } = await axios.get(GetStats(), options);
    setLoading(false);
    setStats(data.data);
    setBestCoins(data.data.bestCoins);
    setNewestCoins(data.data.newestCoins);
  };

  useEffect(() => {
    document.title =
      "CoinsCrpyt - Track prices of your favourite cryptocurrencies";
    fetchStats();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="home">
          <Banner />
          <Stats stats={stats} />
          <Carousel bestCoins={bestCoins} newestCoins={newestCoins} />
        </div>
      )}
    </>
  );
}

export default HomePage;
