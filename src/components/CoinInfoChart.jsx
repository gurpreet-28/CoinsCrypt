import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
import "./CoinInfoChart.css";
import { chartDays } from "../config/data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const CoinInfoChart = ({ uuid, coin }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const apiKey = process.env.REACT_APP_API_KEY;

  const [historicData, setHistoricData] = useState([]);
  const [duration, setDuration] = useState("24h");
  const [label, setLabel] = useState("24 Hours");
  const [flag, setFlag] = useState(false);

  let watchlist = [];
  let watchlistFromLS = JSON.parse(localStorage.getItem("watchlist"));
  if (watchlistFromLS === null) {
    watchlist = [];
  } else {
    watchlist = watchlistFromLS;
  }

  const checkCoin = () => {
    let index = watchlist.findIndex((object) => {
      return object.name === coin.name;
    });
    if (index !== -1) {
      setFlag(true);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      headers: {
        "x-access-token": apiKey,
      },
    };
    const { data } = await axios.get(HistoricalChart(uuid, duration), options);
    setHistoricData(data.data.history);
  };

  useEffect(() => {
    fetchHistoricalData();
    checkCoin();
    // eslint-disable-next-line
  }, [duration]);

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
      <div className="coin-head">
        <img
          src={coin.iconUrl}
          alt="coin-icon"
          style={{ width: "72px", marginBottom: "5px" }}
        />
        <div className="name-head">
          <h1>{coin.name}</h1>
        </div>
        <p>
          {coin.name} live price in US Dollars. View Statistics, Market cap and
          Supply
        </p>
      </div>
      <div className="row chart-head">
        <div className="col info-head">
          <h2>{coin.name} Price Chart</h2>
          <div className="days mt-3">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle days-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {label}
              </button>
              <ul className="dropdown-menu">
                {chartDays.map((day) => {
                  return (
                    <li>
                      <button
                        className="dropdown-item"
                        key={day.value}
                        type="button"
                        onClick={() => {
                          setDuration(day.value);
                          setLabel(day.label);
                        }}
                      >
                        {day.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            {flag ? (
              <i className="fa-solid fa-star fa-lg ms-3"></i>
            ) : (
              <i
                className="fa-regular fa-star fa-lg ms-3"
                onClick={() => {
                  setFlag(true);
                  const watchObj = {
                    name: coin.name,
                    icon: coin.iconUrl,
                    symbol: coin.symbol,
                    uuid: coin.uuid,
                  };
                  watchlist.push(watchObj);
                  localStorage.setItem("watchlist", JSON.stringify(watchlist));
                }}
              ></i>
            )}
          </div>
        </div>
        <div className="col price-head text-end">
          <h3>
            <span>Current {coin.name} price in USD: </span>$
            {convertToInternationalCurrencySystem(coin.price)}
          </h3>
          <h3 className="mt-3">
            <span>Change in last 24h: </span>
            <span
              style={coin.change < 0 ? { color: "red" } : { color: "green" }}
            >
              {coin.change}%
            </span>
          </h3>
        </div>
      </div>
      <div className="chart" style={{ width: "90%" }}>
        <Line
          key={Math.random()}
          data={{
            labels: historicData.map((data) => {
              let date = new Date(data.timestamp);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              return duration === "24h" ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicData.map((data) => data.price),
                label: `Price in USD`,
                borderColor: "#144b9d",
              },
            ],
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default CoinInfoChart;
