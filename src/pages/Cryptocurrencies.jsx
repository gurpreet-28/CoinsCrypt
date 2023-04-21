import { Pagination, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import NumbersContext from "../context/NumbersContext";
import "./Cryptocurrencies.css";

function Cryptocurrencies() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchCoins = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "100",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "27d95d49fcmshe45a3ec39ce438ap1e9abbjsn137363eadc59",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    setLoading(true);
    const { data } = await axios.request(options);
    setList(data.data.coins);
    setLoading(false);
  };

  list.sort((a, b) => {
    return a.rank - b.rank;
  });

  const context = useContext(NumbersContext);
  const { convertToInternationalCurrencySystem } = context;

  useEffect(() => {
    document.title = "Coins - CoinsCrypt";
    fetchCoins();
    // eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    return list.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
      );
    });
  };

  return (
    <>
      <div className="crypto-list">
        <div className="container py-4">
          <h2 className="pb-2 mb-4 border-bottom">
            Cryptocurrency Prices by Market Cap
          </h2>
          <TextField
            label="Search for a cryptocurrency"
            style={{ marginBottom: "0", width: "100%" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {loading ? (
            <Spinner />
          ) : (
            <div className="table-responsive">
              <table className="table table-hover crypto-table align-middle mt-4">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">24H Change</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      return (
                        <tr key={row.name} className="coin-row">
                          <th scope="row">{row.rank}</th>
                          <td
                            onClick={() => {
                              navigate(`/coin/${row.uuid}`);
                            }}
                            className="coin-name"
                          >
                            <img
                              src={row.iconUrl}
                              alt="coin-img"
                              style={{ width: "50px" }}
                              className="table-coin-img me-2"
                            />
                            {row.name}
                          </td>
                          <td>
                            ${convertToInternationalCurrencySystem(row.price)}
                          </td>
                          <td
                            style={
                              row.change < 0
                                ? { color: "red" }
                                : { color: "green" }
                            }
                          >
                            {row.change}%
                          </td>
                          <td>
                            $
                            {convertToInternationalCurrencySystem(
                              row.marketCap
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}

          <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            color="primary"
            count={(handleSearch()?.length / 10).toFixed(0) || 0}
            onChange={(_, value) => {
              setPage(value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Cryptocurrencies;
