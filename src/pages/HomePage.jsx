import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Spinner from "../components/Spinner";
import Stats from "../components/Stats";
import axios from "axios";
import "./HomePage.css";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [bestCoins, setBestCoins] = useState([]);
  const [newestCoins, setNewestCoins] = useState([]);

  const fetchStats = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/stats",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
      headers: {
        "X-RapidAPI-Key": "13cbddd8c3msh83442b2d4cc3526p1cd34djsn9fe518361bc5",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    const { data } = await axios.request(options);
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
