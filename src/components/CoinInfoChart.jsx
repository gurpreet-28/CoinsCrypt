import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
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

const CoinInfoChart = ({ id }) => {
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
      <div className="days">
        {chartDays.map((day) => {
          return (
            <button
              className="btn btn-outline-dark"
              key={day.value}
              type="button"
              onClick={() => {
                setDays(day.value);
              }}
            >
              {day.label}
            </button>
          );
        })}
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
              options: {
                datasets: {
                  line: {
                    pointRadius: 0, // disable for all `'line'` datasets
                  },
                },
                animation: true,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default CoinInfoChart;
