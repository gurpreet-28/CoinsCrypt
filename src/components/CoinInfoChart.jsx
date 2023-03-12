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

const CoinInfoChart = ({ id, coin }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [duration, setDuration] = useState("24 Hours");

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days));
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
    // eslint-disable-next-line
  }, [days]);

  return (
    <>
      <div className="chart-head">
        <div className="info-head">
          <h2>{coin.name} Price Chart</h2>
          <div className="days mt-3">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle days-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {duration}
              </button>
              <ul class="dropdown-menu">
                {chartDays.map((day) => {
                  return (
                    <li>
                      <button
                        className="dropdown-item"
                        key={day.value}
                        type="button"
                        onClick={() => {
                          setDays(day.value);
                          setDuration(day.label);
                        }}
                      >
                        {day.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="price-head">
          <h3>
            <span>Current {coin.name} price in USD: </span>$
            {coin?.market_data?.current_price?.usd}
          </h3>
          <h3 className="mt-3">
            <span>Change in last 24h: </span>
            {coin?.market_data?.price_change_percentage_24h.toFixed(2)}%
          </h3>
        </div>
      </div>
      <div className="chart" style={{ width: "90%" }}>
        {!historicData ? (
          <h1>Hello</h1>
        ) : (
          <Line
            data={{
              labels: historicData.map((data) => {
                let date = new Date(data[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;

                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicData.map((data) => data[1]),
                  label: `Price in USD`,
                  borderColor: "#144b9d",
                },
              ],
            }}
          />
        )}
      </div>
      <div className="row row-cols-lg-2 row-cols-sm-1 coin-info">
        <div className="col">
          <h2>{coin.name} USD Value Statistics</h2>
          <p>
            An overview showing the statistics of Binance USD, such as the base
            and quote currency, the rank, and trading volume.
          </p>
          <table class="table table-hover">
            <tbody>
              <tr>
                <td>Price to USD</td>
                <td className="right">
                  $ {coin?.market_data?.current_price?.usd}
                </td>
              </tr>
              <tr>
                <td>Rank</td>
                <td className="right">{coin?.market_cap_rank}</td>
              </tr>
              <tr>
                <td>24h Volume</td>
                <td className="right">
                  ${" "}
                  {coin?.market_data?.total_volume?.usd.toString().slice(0, -9)}
                  B
                </td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td className="right">
                  $ {coin?.market_data?.market_cap?.usd.toString().slice(0, -9)}
                  B
                </td>
              </tr>
              <tr>
                <td>All-time-high(daily avg.)</td>
                <td className="right">
                  $ {coin?.market_data?.high_24h?.usd.toString().slice(0, -3)}K
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <h2>Other Stats Info</h2>
          <p>
            An overview showing the statistics of Binance USD, such as the base
            and quote currency, the rank, and trading volume.
          </p>
          <table class="table table-hover">
            <tbody>
              <tr>
                <td>Number Of Markets</td>
                <td className="right">Mark</td>
              </tr>
              <tr>
                <td>Number Of Exchanges</td>
                <td className="right">Jacob</td>
              </tr>
              <tr>
                <td>Aprroved Supply</td>
                <td className="right">@twitter</td>
              </tr>
              <tr>
                <td>Total Supply</td>
                <td className="right">@twitter</td>
              </tr>
              <tr>
                <td>Circulating Supply</td>
                <td className="right">@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CoinInfoChart;
