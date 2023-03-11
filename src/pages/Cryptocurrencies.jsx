import { Pagination, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoinList } from "../config/api";
import "./Cryptocurrencies.css";

function Cryptocurrencies() {
  const navigate = useNavigate();

  const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchCoins = async () => {
    // setLoading(true);
    const { data } = await axios.get(CoinList());
    setCoins(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    return coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
      );
    });
  };

  return (
    <div className="mt-5">
      <div className="container py-5" id="featured-3">
        <h2 className="pb-2 mb-4 border-bottom">
          Cryptocurrency Prices by Market Cap
        </h2>
        <TextField
          label="Search For a CryptoCurrency"
          style={{ marginBottom: "0", width: "100%" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <table className="table table-hover table-responsiv align-middle mt-4">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">24H Change</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => {
                return (
                  <tr
                    onClick={() => {
                      navigate(`/coins/${row.id}`);
                    }}
                    key={row.name}
                    className="coin-row"
                  >
                    <th scope="row">{row.market_cap_rank}</th>
                    <td>
                      <img
                        src={row.image}
                        alt="coin-img"
                        style={{ width: "45px" }}
                      />{" "}
                      {row.name}
                    </td>
                    <td>$ {row.current_price}</td>
                    <td>{row.price_change_percentage_24h}%</td>
                    <td>$ {row.market_cap.toString().slice(0, -6)}M</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          count={(handleSearch()?.length / 10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </div>
    </div>
  );
}

export default Cryptocurrencies;
