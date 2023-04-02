import React from "react";
import "./Watchlist.css";
import { Link } from "react-router-dom";
// import Spinner from "../components/Spinner";

const Watchlist = () => {
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <>
      {watchlist !== null ? (
        <div className="container my-5 py-5 watchlist">
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
                  <Link to={`/coin/${coin.uuid}`}>
                    <div className="carousel-card my-2">
                      <img
                        src={coin.icon}
                        alt="coin-img"
                        className="coin-img"
                      />
                      <div className="carousel-card-body">
                        <p>{coin.symbol}</p>
                        <h5 className="carousel-card-title">{coin.name}</h5>
                      </div>
                      <div>
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className="mt-5 pt-5 text-center"
          style={{ height: "calc(100vh - 150px)" }}
        >
          <h2>Your watchlist is empty...</h2>
        </div>
      )}
    </>
  );
};

export default Watchlist;
