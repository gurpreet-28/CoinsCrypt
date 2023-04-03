import React, { useEffect, useState } from "react";
import "./Watchlist.css";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const [size, setSize] = useState(false);
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  const watchlistSize = () => {
    if (watchlist != null && watchlist.length !== 0) {
      setSize(true);
    }
  };

  const deleteCoin = (name) => {
    watchlist.splice(
      watchlist.findIndex((c) => c.name === name),
      1
    );
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  useEffect(() => {
    document.title = "Watchlist - CoinsCrypt";
    watchlistSize();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {size ? (
        <div className="container my-4 watchlist">
          <div className="mb-4">
            <h2>Your Watchlist</h2>
            <hr />
          </div>
          <div className="row">
            {watchlist.map((coin) => {
              return (
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 coin-div"
                  key={coin.uuid}
                >
                  <div className="carousel-card my-2">
                    <img src={coin.icon} alt="coin-img" className="coin-img" />
                    <div className="carousel-card-body">
                      <p>{coin.symbol}</p>
                      <h5 className="carousel-card-title">{coin.name}</h5>
                    </div>
                    <div className="carousel-card-icons">
                      <Link to={`/coin/${coin.uuid}`}>
                        <i className="fa-solid fa-circle-info me-1"></i>
                      </Link>
                      <i
                        className="fa-solid fa-trash ms-1"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCoin(coin.name);
                          window.location.reload(true);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-4 text-center empty-watchlist">
          <h3>Your watchlist is empty...🙃</h3>
        </div>
      )}
    </>
  );
};

export default Watchlist;
